// Solicitar dos cadenas al usuario
var cadena1 = prompt("Introduce la primera cadena:");
var cadena2 = prompt("Introduce la segunda cadena:");

// Concatenar las cadenas
var concatenada = cadena1 + cadena2;

// Calcular la longitud de la cadena concatenada
var longitud = concatenada.length;

// Seleccionar el contenedor para mostrar el resultado
var outputDiv = document.getElementById("output");

// Mostrar el resultado en el HTML
outputDiv.innerHTML = "<p>La longitud de la cadena concatenada es: " + longitud + "</p>";
