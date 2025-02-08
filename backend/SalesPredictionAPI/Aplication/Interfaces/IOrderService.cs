using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Aplication.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDto>> GetOrdersByCustomer(int customerId);
        Task<int> AddNewOrder(NewOrderDto newOrder);
    }
}
