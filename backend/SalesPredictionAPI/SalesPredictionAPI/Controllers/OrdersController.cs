using Microsoft.AspNetCore.Mvc;
using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetOrdersByCustomer(int customerId)
        {
            var orders = await _orderService.GetOrdersByCustomer(customerId);
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewOrder([FromBody] NewOrderDto newOrder)
        {
            var orderId = await _orderService.AddNewOrder(newOrder);
            return CreatedAtAction(nameof(GetOrdersByCustomer), new { customerId = newOrder.CustomerID }, new { OrderID = orderId });
        }
    }


}
