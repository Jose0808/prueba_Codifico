using Microsoft.AspNetCore.Mvc;
using SalesPredictionAPI.Aplication.Interfaces;

namespace SalesPredictionAPI.Controllers
{
    [ApiController]
    [Route("api/shippers")]
    public class ShippersController : ControllerBase
    {
        private readonly IShipperService _shipperService;

        public ShippersController(IShipperService shipperService)
        {
            _shipperService = shipperService;
        }

        [HttpGet]
        public async Task<IActionResult> GetShippers()
        {
            var shippers = await _shipperService.GetShippers();
            return Ok(shippers);
        }
    }

}
