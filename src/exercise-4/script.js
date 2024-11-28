// Pedir el estado del semáforo al usuario
const trafficLight = prompt("Introduce el estado del semáforo (green, flashing amber, amber, red):").toLowerCase();

// Determinar qué debe hacer el coche
if (trafficLight === "green" || trafficLight === "flashing amber") {
    console.log("El coche puede avanzar.");
} else if (trafficLight === "amber" || trafficLight === "red") {
    console.log("El coche debe detenerse.");
} else {
    console.log("Error: Estado del semáforo no reconocido.");
}
