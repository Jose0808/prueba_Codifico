using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;

namespace SalesPredictionAPI.Aplication.Services
{
    public class ShipperService : IShipperService
    {
        private readonly IShipperRepository _shipperRepository;

        public ShipperService(IShipperRepository shipperRepository)
        {
            _shipperRepository = shipperRepository;
        }

        public async Task<IEnumerable<ShipperDto>> GetShippers()
        {
            return await _shipperRepository.GetShippers();
        }
    }
}
