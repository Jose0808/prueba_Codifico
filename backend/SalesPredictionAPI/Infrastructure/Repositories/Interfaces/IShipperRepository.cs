using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Infrastructure.Repositories.Interfaces
{
    public interface IShipperRepository
    {
        Task<IEnumerable<ShipperDto>> GetShippers();
    }

}
