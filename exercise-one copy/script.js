// Solicitar al usuario la temperatura en Centígrados
var centigrados = parseFloat(prompt("Introduce los grados Centígrados:"));

// Calcular la temperatura en Fahrenheit
var fahrenheit = (centigrados * 9 / 5) + 32;

// Seleccionar el contenedor para mostrar el resultado
var outputDiv = document.getElementById("output");

// Mostrar el resultado en el HTML
outputDiv.innerHTML = "<p>" + centigrados + "°C son equivalentes a " + fahrenheit.toFixed(2) + "°F.</p>";
``
