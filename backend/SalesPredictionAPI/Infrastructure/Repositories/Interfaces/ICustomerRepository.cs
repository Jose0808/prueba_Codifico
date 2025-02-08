using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Infrastructure.Repositories.Interfaces
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<SalesPredictionDto>> GetSalesPredictions();
    }
}
