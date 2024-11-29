// Obtener elementos del DOM
const urlInput = document.getElementById('urlInput');
const resultDiv = document.getElementById('result');

// Función para verificar la URL
function checkUrl() {
    const url = urlInput.value.trim(); // Obtener la URL y quitar espacios al principio y al final

    try {
        // Crear un objeto URL para analizar la URL ingresada
        const parsedUrl = new URL(url);

        // Verificar si el hostname es 'github.com' (dominio principal)
        if (parsedUrl.hostname === 'github.com') {
            resultDiv.textContent = 'Es el dominio principal de GitHub.';
        } 
        // Verificar si el hostname contiene 'github.com' pero no es exactamente 'github.com' (subdominio)
        else if (parsedUrl.hostname.endsWith('.github.com') && parsedUrl.hostname !== 'github.com') {
            resultDiv.textContent = 'Es un subdominio de github.com.';
        } 
        // Verificar si el hostname termina con 'github.es' (GitHub Pages)
        else if (parsedUrl.hostname.endsWith('github.es')) {
            resultDiv.textContent = 'Es un dominio de GitHub (páginas de usuario).';
        } 
        else {
            resultDiv.textContent = 'No es un dominio de GitHub.';
        }
    } catch (error) {
        resultDiv.textContent = 'La URL ingresada no es válida.';
    }
}

// Asignar evento al botón para verificar la URL cuando el usuario haga clic
document.getElementById('checkUrl').addEventListener('click', checkUrl);
