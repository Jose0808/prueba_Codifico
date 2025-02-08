using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Infrastructure.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductDto>> GetProducts();

    }
}
