namespace SalesPredictionAPI.Domain.DTOs
{
    public class OrderDto
    {
        public int OrderId { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public string ShipName { get; set; }
        public string Shipaddress { get; set; }
        public string Shipcity { get; set; }
    }
}
