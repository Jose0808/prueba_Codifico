using Dapper;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using System.Data;

namespace SalesPredictionAPI.Infrastructure.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly IDbConnection _dbConnection;

        public CustomerRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<SalesPredictionDto>> GetSalesPredictions()
        {
            return await _dbConnection.QueryAsync<SalesPredictionDto>(
                "dbo.usp_SalesDatePrediction",
                commandType: CommandType.StoredProcedure);
        }
    }
}
