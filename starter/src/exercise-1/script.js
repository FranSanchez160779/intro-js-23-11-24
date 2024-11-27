const str1 = prompt("Introduce la primera cadena:");
const str2 = prompt("Introduce la segunda cadena:");
const concatenated = str1 + str2;
const length = concatenated.length;

document.getElementById("output").innerHTML = `<p>La longitud de la cadena concatenada es: ${length}</p>`;
