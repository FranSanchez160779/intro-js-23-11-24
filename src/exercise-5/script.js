// Seleccionar elementos del DOM
const trafficLightInput = document.getElementById("trafficLight");
const checkButton = document.getElementById("check");
const resultDiv = document.getElementById("result");

// Función para verificar el estado del semáforo
function checkTrafficLight() {
    const state = trafficLightInput.value.trim().toLowerCase(); // Obtener y limpiar el input

    // PIntar mensaje según estado
    let message;
    let color;

    if (state === "verde") {
        message = "✅ El semáforo está en verde. Puedes avanzar.";
        color = "verde";
    } else if (state === "ambar intermitente") {
        message = "⚠️ El semáforo está en ámbar intermitente. Puedes avanzar con precaución.";
        color = "ambar intermitente";
    } else if (state === "ambar") {
        message = "⛔ El semáforo está en ámbar fijo. Debes detenerte.";
        color = "rojo";
    } else if (state === "rojo") {
        message = "🛑 El semáforo está en rojo. Debes detenerte.";
        color = "rojo";
    } else {
        message = "❌ Error: El estado introducido no es válido. Usa green, flashing amber, amber o red.";
        color = "gray";
    }

    // Mostrar el mensaje en la página
    resultDiv.innerHTML = message;
    resultDiv.style.color = color; // Cambiar el color del texto
}

// Asociar el evento al botón
checkButton.addEventListener("click", checkTrafficLight);
