// Solicitar al usuario la temperatura en Centígrados
const centigrados = parseFloat(prompt("Introduce los grados Centígrados:"));

// Calcular la temperatura en Fahrenheit
const fahrenheit = (centigrados * 9 / 5) + 32;

// Seleccionar el contenedor para mostrar el resultado
const outputDiv = document.getElementById("output");

// Mostrar el resultado en el HTML
outputDiv.innerHTML = "<p>" + centigrados + "°C son equivalentes a " + fahrenheit.toFixed(2) + "°F.</p>";
