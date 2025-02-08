using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;

namespace SalesPredictionAPI.Aplication.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<IEnumerable<SalesPredictionDto>> GetSalesPredictions()
        {
            return await _customerRepository.GetSalesPredictions();
        }
    }
}
