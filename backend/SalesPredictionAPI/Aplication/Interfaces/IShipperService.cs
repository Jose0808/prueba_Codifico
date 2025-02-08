using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Aplication.Interfaces
{
    public interface IShipperService
    {
        Task<IEnumerable<ShipperDto>> GetShippers();
    }
}
