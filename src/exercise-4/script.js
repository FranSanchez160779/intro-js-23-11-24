// Pedir al usuario el porcentaje de contaminación
const pollution = parseFloat(prompt("Introduce el nivel de contaminación (%):"));

// Determinar el límite de velocidad
let speedLimit;

if (pollution > 65) {
    speedLimit = 70;
} else {
    speedLimit = 90;
}

// Mostrar el límite de velocidad
console.log("El límite de velocidad es: " + speedLimit + " km/h");
