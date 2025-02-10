# Sales Prediction App

Este es un proyecto de **Full Stack** que permite gestionar predicciones de ventas mediante una tabla que contiene la prediccion por cliente utilizando **Angular**, backend en **.NET Core**, y una base de datos en **SQL Server**.

---

## 📂 **Estructura del Proyecto**
📦 sales-prediction 
┣ 📂 backend/ # API REST en .NET Core 
┃ ┣ 📜 SalesPredictionAPI/ # Código fuente del backend 
┃ ┣ 📜 SalesPredictionAPI.Test/ # Código fuente del test backend 
┣ 📂 database / # Scripst de base de datos SQL server 
┃ ┣ 📜 DBSetup.sql # Script para crear la base de datos
┃ ┣ 📜 DBStoredProcedures.sql # Script para crear Stored Procedures 
┣ 📂 frontend/ # Aplicación Frontend en Angular 17+ 
┃ ┣ 📜 src/ # Código fuente del frontend 
┃ ┣ 📜 package.json # Dependencias del frontend 
┣ 📜 README.md # Documentación del proyecto

---

# 🚀 **Instrucciones de Instalación**
## 1️⃣ **Clonar el Repositorio**
```sh
git clone https://github.com/Jose0808/prueba_Codifico.git
cd sales-prediction
```
2️⃣ Configurar la Base de Datos (SQL Server)
🔹 Requisitos: Tener instalado SQL Server y SQL Server Management Studio (SSMS).

Abrir DBSetup.sql en SSMS.
Ejecutar los script para crear la base de datos y los Stored Procedures en el siguiente orden:
DBSetup.sql
DBStoredProcedures.sql
-- Aquí se crean las tablas y los Stored Procedures

3️⃣ Ejecutar el Backend (.NET Core)
🔹 Requisitos: Tener instalado .NET 8 SDK.

Navegar al directorio del backend:
```sh
cd backend/SalesPredictionAPI
```
Restaurar paquetes y compilar el proyecto:
```sh
dotnet restore
dotnet build
```
Configurar la cadena de conexión en appsettings.json:
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=SalesPredictionDB;Trusted_Connection=True;"
}
Ejecutar la API:
```sh
dotnet run
```
💡 La API estará disponible en: http://localhost:7045/api

Ejecutar Pruebas en el Backend:
```sh
cd backend/SalesPredictionAPI.Tests
dotnet test
```


4️⃣ Ejecutar el Frontend (Angular 17+)
🔹 Requisitos: Tener instalado Node.js 18+ y Angular CLI.

Navegar al directorio del frontend:
```sh
cd frontend/sales-prediction
Instalar las dependencias:
npm install
```
Configurar la URL del backend en src/environments/environment.ts:
export const environment = {
  production: false,
  apiUrl: 'http://localhost:7045/api'
};
Ejecutar la aplicación:
```sh
ng serve --open
```
💡 El frontend estará disponible en: http://localhost:4200

---

Vanilla Javascript, Cómo Funciona?
El usuario ingresa números enteros separados por comas en el input.
Al presionar "Update Data", se validan los datos y se genera un gráfico de barras.
Cada barra tiene un color diferente (máximo 5 colores alternativos).
Los valores de las barras se muestran arriba de cada una.

----

🛠 Tecnologías Utilizadas
🔹 Backend: .NET Core 8, Dapper
🔹 Frontend: Angular 17+, Angular Material, D3.js
🔹 Base de Datos: SQL Server

📝 Consideraciones sobre la Prueba
✔ Validaciones Implementadas
✔ Separación de Responsabilidades
✔ Seguridad y Buenas Prácticas

📢 Posibles Mejoras
🔹 Agregar autenticación con JWT.
🔹 Mejorar la gestión de errores en el frontend y backend.
🔹 Agregar mas validaciones.

---

👨‍💻 Autor
[Jose Colmenares]
