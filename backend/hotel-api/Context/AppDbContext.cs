using Microsoft.EntityFrameworkCore;
using MyApi.Models;

namespace MyApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Hotel> Hotels { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.ToTable("hotel"); // table name in PostgreSQL

                entity.HasKey(e => e.Id); // primary key

                // explicitly map each property to lowercase column
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.CountyCode).HasColumnName("countycode");
                entity.Property(e => e.CountyName).HasColumnName("countyname");
                entity.Property(e => e.CityCode).HasColumnName("citycode");
                entity.Property(e => e.CityName).HasColumnName("cityname");
                entity.Property(e => e.HotelCode).HasColumnName("hotelcode");
                entity.Property(e => e.HotelName).HasColumnName("hotelname");
                entity.Property(e => e.HotelRating).HasColumnName("hotelrating");
                entity.Property(e => e.Address).HasColumnName("address");
                entity.Property(e => e.Attractions).HasColumnName("attractions");
                entity.Property(e => e.Description).HasColumnName("description");
                entity.Property(e => e.FaxNumber).HasColumnName("faxnumber");
                entity.Property(e => e.HotelFacilities).HasColumnName("hotelfacilities");
                entity.Property(e => e.Map).HasColumnName("map");
                entity.Property(e => e.PhoneNumber).HasColumnName("phonenumber");
                entity.Property(e => e.PinCode).HasColumnName("pincode");
                entity.Property(e => e.HotelWebsiteUrl).HasColumnName("hotelwebsiteurl");
            });
        }
    }
}
