// Pedir una URL al usuario
const urlInput = prompt("Introduce una URL completa (por ejemplo, https://github.com):");

// Validar que el usuario ingresó algo
if (urlInput) {
    try {
        // Extraer el dominio de la URL
        const domain = new URL(urlInput).hostname;

        // Determinar si el dominio pertenece a GitHub
        const isGithub = domain.includes("github.com");

        // Mostrar el resultado en la página
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
            <p>El dominio de la URL es: <strong>${domain}</strong></p>
            <p>${isGithub ? "Este dominio pertenece a GitHub." : "Este dominio no pertenece a GitHub."}</p>
        `;
    } catch (error) {
        // Si ocurre un error (por ejemplo, la URL es inválida)
        document.getElementById("output").innerHTML = `
            <p>Error: La URL introducida no es válida.</p>
        `;
    }
} else {
    // Si el usuario no introduce nada
    document.getElementById("output").innerHTML = `
        <p>No se ha introducido ninguna URL.</p>
    `;
}
