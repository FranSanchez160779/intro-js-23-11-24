// Obtenemos los elementos del DOM
const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultElement = document.getElementById('result');

// Función para verificar si el número es par o impar
checkButton.addEventListener('click', function() {
    const number = parseInt(numberInput.value); // Convertimos el valor del input a un número entero
    
    // Verificamos si el número es válido
    if (isNaN(number)) {
        resultElement.textContent = 'Por favor, introduce un número válido.';
        resultElement.classList.remove('even', 'odd'); // Eliminamos clases previas
        return;
    }

    // Verificamos si el número es par o impar
    if (number % 2 === 0) {
        resultElement.textContent = `${number} es un número par.`;
        resultElement.classList.add('even'); // Aplicamos estilo de número par
        resultElement.classList.remove('odd'); // Quitamos el estilo de número impar
    } else {
        resultElement.textContent = `${number} es un número impar.`;
        resultElement.classList.add('odd'); // Aplicamos estilo de número impar
        resultElement.classList.remove('even'); // Quitamos el estilo de número par
    }
});
