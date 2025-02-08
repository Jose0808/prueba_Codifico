using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;

namespace SalesPredictionAPI.Aplication.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<IEnumerable<OrderDto>> GetOrdersByCustomer(int customerId)
        {
            return await _orderRepository.GetOrdersByCustomer(customerId);
        }

        public async Task<int> AddNewOrder(NewOrderDto newOrder)
        {
            return await _orderRepository.AddNewOrder(newOrder);
        }
    }
}
