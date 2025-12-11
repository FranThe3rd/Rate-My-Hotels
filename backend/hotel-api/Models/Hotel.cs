using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyApi.Models
{
    [Table("hotel")] // exact table name
    public class Hotel
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("countycode")]
        public string CountyCode { get; set; } = string.Empty;

        [Column("countyname")]
        public string CountyName { get; set; } = string.Empty;

        [Column("citycode")]
        public int CityCode { get; set; }

        [Column("cityname")]
        public string CityName { get; set; } = string.Empty;

        [Column("hotelcode")]
        public int HotelCode { get; set; }

        [Column("hotelname")]
        public string HotelName { get; set; } = string.Empty;

        [Column("hotelrating")]
        public string HotelRating { get; set; } = string.Empty;

        [Column("address")]
        public string Address { get; set; } = string.Empty;

        [Column("attractions")]
        public string? Attractions { get; set; }

        [Column("description")]
        public string? Description { get; set; }

        [Column("faxnumber")]
        public string? FaxNumber { get; set; }

        [Column("hotelfacilities")]
        public string? HotelFacilities { get; set; }

        [Column("map")]
        public string? Map { get; set; }

        [Column("phonenumber")]
        public string? PhoneNumber { get; set; }

        [Column("pincode")]
        public string? PinCode { get; set; }

        [Column("hotelwebsiteurl")]
        public string? HotelWebsiteUrl { get; set; }
    }
}
