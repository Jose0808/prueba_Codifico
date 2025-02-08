using Dapper;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using System.Data;

namespace SalesPredictionAPI.Infrastructure.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly IDbConnection _dbConnection;

        public EmployeeRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<EmployeeDto>> GetEmployees()
        {
            return await _dbConnection.QueryAsync<EmployeeDto>("dbo.usp_GetEmployees", commandType: CommandType.StoredProcedure);
        }
    }
}
