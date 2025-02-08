namespace SalesPredictionAPI.Domain.DTOs
{
    public class OrderDto
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public string ShipName { get; set; }
    }
}
