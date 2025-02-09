using Moq;
using Xunit;
using SalesPredictionAPI.Domain.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;
using SalesPredictionAPI.Infrastructure.Repositories.Interfaces;
using SalesPredictionAPI.Aplication.Services;

public class OrderServiceTests
{
    private readonly Mock<IOrderRepository> _mockRepository;
    private readonly OrderService _orderService;

    public OrderServiceTests()
    {
        _mockRepository = new Mock<IOrderRepository>();
        _orderService = new OrderService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetOrdersByCustomer_ReturnsOrders()
    {
        // 🔹 Configurar datos falsos
        var fakeOrders = new List<OrderDto>
        {
            new OrderDto { OrderID = 1, OrderDate = System.DateTime.Now, ShipName = "DHL" }
        };
        _mockRepository.Setup(repo => repo.GetOrdersByCustomer(1)).ReturnsAsync(fakeOrders);

        // 🔹 Actuar
        var result = (await _orderService.GetOrdersByCustomer(1)).ToList();

        // 🔹 Afirmar
        Assert.NotNull(result);
        Assert.Single(result);
        Assert.Equal(1, result[0].OrderID);
    }

}
