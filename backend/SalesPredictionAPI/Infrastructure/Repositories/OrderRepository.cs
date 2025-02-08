using Dapper;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using System.Data;

namespace SalesPredictionAPI.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IDbConnection _dbConnection;

        public OrderRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<OrderDto>> GetOrdersByCustomer(int customerId)
        {
            return await _dbConnection.QueryAsync<OrderDto>(
                "dbo.usp_GetClientOrders",
                new { CustomerID = customerId },
                commandType: CommandType.StoredProcedure);
        }

        public async Task<int> AddNewOrder(NewOrderDto newOrder)
        {
            return await _dbConnection.ExecuteAsync(
                "dbo.usp_AddNewOrder",
                newOrder,
                commandType: CommandType.StoredProcedure);
        }
    }

}
