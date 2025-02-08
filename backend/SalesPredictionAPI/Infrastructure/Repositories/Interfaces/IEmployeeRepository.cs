using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Infrastructure.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<EmployeeDto>> GetEmployees();
    }
}
