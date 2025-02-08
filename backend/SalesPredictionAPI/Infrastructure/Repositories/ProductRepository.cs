using Dapper;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using System.Data;

namespace SalesPredictionAPI.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IDbConnection _dbConnection;

        public ProductRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            return await _dbConnection.QueryAsync<ProductDto>(
                "dbo.usp_GetProducts",
                commandType: CommandType.StoredProcedure);
        }
    }
}
