// Obtener los elementos del DOM
const numInput = document.getElementById('numInput');
const result = document.getElementById('result');

// Función para verificar si el número es par o impar
function checkEvenOdd() {
    const number = parseInt(numInput.value); // Obtener el número ingresado

    // Limpiar el mensaje anterior
    result.textContent = '';

    // Verificar si el número es válido
    if (isNaN(number)) {
        result.textContent = 'Por favor, ingresa un número válido.';
        result.className = 'error';  // Aplicar el estilo de error
    } else {
        // Si el número es válido, verificar si es par o impar
        if (number % 2 === 0) {
            result.textContent = `${number} es par`;
            result.className = 'par';  // Aplicar el estilo de número par
        } else {
            result.textContent = `${number} es impar`;
            result.className = 'impar';  // Aplicar el estilo de número impar
        }
    }
}

// Asignar el evento al botón para ejecutar la función cuando se haga clic
document.getElementById('checkNumber').addEventListener('click', checkEvenOdd);
