// Solicitar al usuario el peso (en kg) y la altura (en metros)
const peso = parseFloat(prompt("Introduce tu peso en kg:"));
const altura = parseFloat(prompt("Introduce tu altura en metros:"));

// Calcular el IMC
const imc = peso / (altura * altura);

// Seleccionar el contenedor para mostrar el resultado
const outputDiv = document.getElementById("output");

// Verificar si el IMC está en el rango de 'Obesidad de clase II'
if (imc >= 35 && imc < 40) {
    outputDiv.innerHTML = "<p>Tu IMC es " + imc.toFixed(2) + ". Esto indica 'Obesidad de clase II'.</p>";
} else {
    outputDiv.innerHTML = "<p>Tu IMC es " + imc.toFixed(2) + ". No corresponde a 'Obesidad de clase II'.</p>";
}