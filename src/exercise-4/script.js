// Seleccionar los elementos de la página
const pollutionInput = document.getElementById("pollution");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// Función para calcular el límite de velocidad
function calculateSpeedLimit() {
    const pollution = parseFloat(pollutionInput.value); // Obtener el valor introducido

    // Validar que se ha introducido un número válido
    if (isNaN(pollution) || pollution < 0 || pollution > 100) {
        resultDiv.innerHTML = "❌ Por favor, introduce un valor de contaminación válido (entre 0 y 100).";
        resultDiv.style.color = "red"; // Mostrar mensaje de error en rojo
        return;
    }

    // Calcular el límite de velocidad
    let speedLimit = pollution > 65 ? 70 : 90;

    // Mostrar el resultado
    resultDiv.style.color = "#333"; // Resetear color
    resultDiv.innerHTML = `✅ El límite de velocidad es: <strong>${speedLimit} km/h</strong>`;
}

// Asociar el evento de clic al botón
calculateButton.addEventListener("click", calculateSpeedLimit);
