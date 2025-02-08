using SalesPredictionAPI.Aplication.Interfaces;
using SalesPredictionAPI.Domain.DTOs;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;

namespace SalesPredictionAPI.Aplication.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            return await _productRepository.GetProducts();
        }
    }
}
