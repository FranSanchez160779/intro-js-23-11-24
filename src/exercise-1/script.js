// Solicitar dos cadenas al usuario
const cadena1 = prompt("Introduce la primera cadena:");
const cadena2 = prompt("Introduce la segunda cadena:");

// Concatenar las cadenas
const concatenada = cadena1 + cadena2;

// Calcular la longitud de la cadena concatenada
const longitud = concatenada.length;

// Seleccionar el contenedor para mostrar el resultado
const outputDiv = document.getElementById("output");

// Mostrar el resultado en el HTML
outputDiv.innerHTML = "<p>La longitud de la cadena concatenada es: " + longitud + "</p>";
