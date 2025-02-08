using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Aplication.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetProducts();
    }
}
