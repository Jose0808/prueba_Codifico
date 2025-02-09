using Moq;
using Xunit;
using System.Collections.Generic;
using System.Threading.Tasks;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using SalesPredictionAPI.Aplication.Services;
using SalesPredictionAPI.Domain.DTOs;

public class CustomerServiceTests
{
    private readonly Mock<ICustomerRepository> _mockRepository;
    private readonly CustomerService _customerService;

    public CustomerServiceTests()
    {
        _mockRepository = new Mock<ICustomerRepository>();
        _customerService = new CustomerService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetSalesPredictions_ReturnsListOfPredictions()
    {
        // 🔹 Configurar el mock con datos falsos
        var fakePredictions = new List<SalesPredictionDto>
        {
            new SalesPredictionDto { CustomerName = "Cliente 1", LastOrderDate = System.DateTime.Now.AddDays(-30), NextPredictedOrder = System.DateTime.Now.AddDays(30) }
        };
        _mockRepository.Setup(repo => repo.GetSalesPredictions()).ReturnsAsync(fakePredictions);

        // 🔹 Actuar
        var result = (await _customerService.GetSalesPredictions()).ToList();

        // 🔹 Afirmar
        Assert.NotNull(result);
        Assert.Single(result);
        Assert.Equal("Cliente 1", result[0].CustomerName);
    }
}
