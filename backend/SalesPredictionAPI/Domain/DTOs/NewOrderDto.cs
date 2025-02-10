using System.ComponentModel.DataAnnotations;

namespace SalesPredictionAPI.Domain.DTOs
{
    public class NewOrderDto
    {
        public required int CustomerID { get; set; }
        public required int EmpID { get; set; }
        public required int ShipperID { get; set; }
        
        [Required, StringLength(50, MinimumLength = 3, ErrorMessage = "Error in request")]
        public required string ShipName { get; set; }
        public required string ShipAddress { get; set; }
        
        [Required, RegularExpression(@"^[a-zA-ZÀ-ÿ\s]{3,30}$", ErrorMessage = "Error in request")]
        public required string ShipCity { get; set; }
        public required string ShipCountry { get; set; }
        public required DateTime OrderDate { get; set; }
        public required DateTime RequiredDate { get; set; }
        public required DateTime? ShippedDate { get; set; }
        public required decimal Freight { get; set; }
        public required int ProductID { get; set; }
        public required decimal UnitPrice { get; set; }
        public required int Qty { get; set; }
        public required decimal Discount { get; set; }
    }

}
