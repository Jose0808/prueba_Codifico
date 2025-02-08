using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Aplication.Interfaces
{
    public interface ICustomerService
    {
        Task<IEnumerable<SalesPredictionDto>> GetSalesPredictions();
    }
}
