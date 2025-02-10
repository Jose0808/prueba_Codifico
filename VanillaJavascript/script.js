document.addEventListener("DOMContentLoaded", () => {
    const colorPalette = ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71", "#9b59b6"];
    const inputElement = document.getElementById("dataInput");
    const updateButton = document.getElementById("updateButton");

    updateButton.addEventListener("click", () => {
        try {
            const numbers = validateInput(inputElement.value);
            updateChart(numbers, colorPalette);
        } catch (error) {
            alert(error.message);
        }
    });
});

/**
 * Valida y procesa la entrada del usuario.
 * @param {string} inputData - Datos ingresados en el input.
 * @returns {number[]} - Lista de números enteros validados.
 * @throws {Error} - Si la entrada es inválida.
 */
function validateInput(inputData) {
    if (!inputData.trim()) throw new Error("El campo está vacío. Ingrese números separados por comas.");

    const numbers = inputData.split(",")
        .map(num => num.trim())
        .filter(num => num !== "" && !isNaN(num) && Number.isInteger(parseFloat(num)))
        .map(num => parseInt(num, 10));

    if (numbers.length === 0) throw new Error("Debe ingresar al menos un número entero válido.");

    return numbers;
}

/**
 * Crea o actualiza el gráfico de barras con los datos dados.
 * @param {number[]} data - Datos a graficar.
 * @param {string[]} colorPalette - Paleta de colores.
 */
function updateChart(data, colorPalette) {
    const width = 500;
    const height = 300;
    const barPadding = 5;
    const barWidth = (width / data.length) - barPadding;

    // Remover gráfico anterior
    d3.select("#chart").select("svg").remove();

    // Crear el SVG
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Escala para la altura de las barras
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, height - 20]);

    // Crear las barras
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * (barWidth + barPadding))
        .attr("y", d => height - yScale(d))
        .attr("width", barWidth)
        .attr("height", d => yScale(d))
        .attr("fill", (d, i) => colorPalette[i % colorPalette.length]);

    // Agregar etiquetas con valores encima de las barras
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i * (barWidth + barPadding) + barWidth / 2)
        .attr("y", d => height - yScale(d) - 5)
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr("font-size", "14px")
        .attr("font-weight", "bold");
}
