using Microsoft.AspNetCore.Mvc;
using SalesPredictionAPI.Aplication.Interfaces;

namespace SalesPredictionAPI.Controllers
{
    [ApiController]
    [Route("api/customers")]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomersController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet("sales-prediction")]
        public async Task<IActionResult> GetSalesPredictions()
        {
            var predictions = await _customerService.GetSalesPredictions();
            return Ok(predictions);
        }
    }

}
