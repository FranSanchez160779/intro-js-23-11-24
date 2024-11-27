const celsius = parseFloat(prompt("Introduce los grados Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;

document.getElementById("output").innerHTML = `<p>${celsius}°C son equivalentes a ${fahrenheit.toFixed(2)}°F.</p>`;
