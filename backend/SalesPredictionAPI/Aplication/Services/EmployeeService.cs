using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;

namespace SalesPredictionAPI.Aplication.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<EmployeeDto>> GetEmployees()
        {
            return await _employeeRepository.GetEmployees();
        }
    }
}
