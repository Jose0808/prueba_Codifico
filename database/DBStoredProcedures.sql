---------------------------------------------------------------------
-- Jose Colmenares
-- Last updated: 20250207
---------------------------------------------------------------------

---------------------------------------------------------------------
-- Create Stored Procedures
---------------------------------------------------------------------

-- Create procedure usp_SalesDatePrediction

CREATE PROCEDURE usp_SalesDatePrediction
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
		c.custid AS CustomerId,
        c.contactname AS CustomerName,
        MAX(o.orderdate) AS LastOrderDate,
        DATEADD(DAY, AVG(DATEDIFF(DAY, prevOrders.orderdate, o.orderdate)), MAX(o.orderdate)) AS NextPredictedOrder
    FROM Sales.Orders o
    JOIN Sales.Customers c ON o.custid = c.custid
    LEFT JOIN Sales.Orders prevOrders 
        ON prevOrders.custid = o.custid AND prevOrders.orderdate < o.orderdate
    GROUP BY c.custid, c.contactname;
END;
GO

-- Create procedure usp_GetClientOrders

CREATE PROCEDURE usp_GetClientOrders
    @CustomerID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        Orderid, 
        Requireddate, 
        Shippeddate, 
        Shipname, 
        Shipaddress, 
        Shipcity
    FROM Sales.Orders
    WHERE custid = @CustomerID;
END;
GO

-- Create procedure usp_GetEmployees

CREATE PROCEDURE usp_GetEmployees
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        Empid, 
        firstname + ' ' + lastname AS FullName
    FROM HR.Employees;
END;
GO

-- Create procedure usp_GetShippers

CREATE PROCEDURE usp_GetShippers
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        shipperid, 
        companyname
    FROM Sales.Shippers;
END;
GO

-- Create procedure usp_GetProducts

CREATE PROCEDURE usp_GetProducts
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        productid, 
        productname
    FROM Production.Products;
END;
GO

-- Create procedure usp_AddNewOrder

CREATE PROCEDURE usp_AddNewOrder
     @CustomerID INT,
    ----order
    @EmpID INT,
    @ShipperID INT,
    @ShipName NVARCHAR(100),
    @ShipAddress NVARCHAR(200),
    @ShipCity NVARCHAR(100),
    @ShipCountry NVARCHAR(100),
    @OrderDate DATE,
    @RequiredDate DATE,
    @ShippedDate DATE,
    @Freight DECIMAL(10,2),
	---OrderDetails
    @ProductID INT,
    @UnitPrice DECIMAL(10,2),
    @Qty INT,
    @Discount DECIMAL(5,2)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @OrderID INT;

	BEGIN TRY
    -- Insertar la orden
    INSERT INTO Sales.Orders (custid, empid, shipperid, shipname, shipaddress, shipcity, shipcountry, orderdate, requireddate, shippeddate, freight)
    VALUES (@CustomerID , @EmpID, @ShipperID, @ShipName, @ShipAddress, @ShipCity, @ShipCountry, @OrderDate, @RequiredDate, @ShippedDate, @Freight);

    -- Obtener el ID de la orden recién insertada
    SET @OrderID = SCOPE_IDENTITY();

    -- Insertar el detalle de la orden
    INSERT INTO Sales.OrderDetails (orderid, productid, unitprice, qty, discount)
    VALUES (@OrderID, @ProductID, @UnitPrice, @Qty, @Discount);

    -- Retornar el ID de la orden creada
    SELECT @OrderID AS NewOrderID;

	END TRY
BEGIN CATCH
    -- Manejo de errores
    PRINT ERROR_MESSAGE();
END CATCH;
END;
GO
