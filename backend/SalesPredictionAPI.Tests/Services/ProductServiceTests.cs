using Moq;
using Xunit;
using System.Collections.Generic;
using System.Threading.Tasks;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using SalesPredictionAPI.Aplication.Services;
using SalesPredictionAPI.Domain.DTOs;

public class ProductServiceTests
{
    private readonly Mock<IProductRepository> _mockRepository;
    private readonly ProductService _productService;

    public ProductServiceTests()
    {
        _mockRepository = new Mock<IProductRepository>();
        _productService = new ProductService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetProducts_ReturnsListOfProducts()
    {
        // 🔹 Configurar datos falsos
        var fakeProducts = new List<ProductDto>
        {
            new ProductDto { ProductID = 1, ProductName = "Laptop" }
        };
        _mockRepository.Setup(repo => repo.GetProducts()).ReturnsAsync(fakeProducts);

        // 🔹 Actuar
        var result = (await _productService.GetProducts()).ToList();

        // 🔹 Afirmar
        Assert.NotNull(result);
        Assert.Single(result);
        Assert.Equal("Laptop", result[0].ProductName);
    }
}
