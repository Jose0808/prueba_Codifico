using SalesPredictionAPI.Domain.DTOs;

namespace SalesPredictionAPI.Aplication.Interfaces
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeDto>> GetEmployees();
    }
}
