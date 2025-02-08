namespace SalesPredictionAPI.Domain.DTOs
{
    public class SalesPredictionDto
    {
        public string CustomerName { get; set; }
        public DateTime LastOrderDate { get; set; }
        public DateTime NextPredictedOrder { get; set; }
    }
}
