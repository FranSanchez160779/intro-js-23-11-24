document.getElementById('startBtn').addEventListener('click', function() {
    // Obtener el número del input
    const number = document.getElementById('numberInput').value;
    
    // Limpiar el área de resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpiar el resultado previo

    // Si el número no es válido
    if (isNaN(number) || number <= 0) {
        resultDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    // Realizamos el ciclo FizzBuzz hasta el número dado
    let result = '';

    // Comprobar si el número es múltiplo de 3 y 5 (FizzBuzz)
    if (number % 3 === 0 && number % 5 === 0) {
        result = 'FizzBuzz';
    }
    // Si solo es múltiplo de 3
    else if (number % 3 === 0) {
        result = 'Fizz';
    }
    // Si solo es múltiplo de 5
    else if (number % 5 === 0) {
        result = 'Buzz';
    }

    // Si hay un resultado, mostrarlo
    if (result) {
        resultDiv.innerHTML = `<div class="${result.toLowerCase()}">${result}</div>`;
    } else {
        resultDiv.innerHTML = 'El número no es múltiplo de 3 ni de 5.';
    }
});
