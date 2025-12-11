using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.Data;
using MyApi.Models;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HotelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HotelsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotelByName(string name)
        {
            var hotels = await _context.Hotels
                .Where(h => EF.Functions.ILike(h.HotelName, $"%{name}%"))
                .ToListAsync();

            return hotels.Count == 0 ? NotFound() : hotels;
        }
    }
}
