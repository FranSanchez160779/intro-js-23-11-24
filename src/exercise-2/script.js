// Solicitar al usuario la temperatura en Centígrados
const celsius = parseFloat(prompt("Introduce los grados Celsius:"));

// Calcular la temperatura en Fahrenheit
const fahrenheit = (celsius * 9 / 5) + 32;

// Seleccionar el contenedor para mostrar el resultado
const outputDiv = document.getElementById("output");

// Mostrar el resultado en el HTML
outputDiv.innerHTML = "<p>" + centigrados + "°C son equivalentes a " + fahrenheit.toFixed(2) + "°F.</p>";
