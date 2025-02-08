using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Infrastructure.Repositories.Interfaces
{
    public interface IOrderRepository
    {
        Task<IEnumerable<OrderDto>> GetOrdersByCustomer(int customerId);
        Task<int> AddNewOrder(NewOrderDto newOrder);
    }
}
