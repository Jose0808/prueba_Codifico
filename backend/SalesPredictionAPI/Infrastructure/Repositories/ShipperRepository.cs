using Dapper;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using System.Data;

namespace SalesPredictionAPI.Infrastructure.Repositories
{
    public class ShipperRepository : IShipperRepository
    {
        private readonly IDbConnection _dbConnection;

        public ShipperRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<ShipperDto>> GetShippers()
        {
            return await _dbConnection.QueryAsync<ShipperDto>(
                "dbo.usp_GetShippers",
                commandType: CommandType.StoredProcedure);
        }
    }
}
