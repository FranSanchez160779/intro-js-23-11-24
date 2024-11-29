// Selección de elementos del DOM
const gradeInput = document.getElementById('gradeInput');
const checkGradeButton = document.getElementById('checkGrade');
const resultDiv = document.getElementById('result');

// Función para verificar la calificación
function checkGrade() {
    const grade = parseFloat(gradeInput.value); // Convertir el valor a número

    // Verificar la nota y pinta el resultado
    let message = '';

    if (isNaN(grade) || grade < 0 || grade > 10) {
        message = '❌ Por favor, introduce un número válido entre 0 y 10.';
    } else if (grade < 5) {
        message = '📕 SUSPENSA';
    } else if (grade < 7) {
        message = '📒 APROBADA';
    } else if (grade < 9) {
        message = '📗 NOTABLE';
    } else if (grade < 10) {
        message = '📘 SOBRESALIENTE';
    } else if (grade === 10) {
        message = '🏆 MATRÍCULA DE HONOR';
    }

    // Mostrar el mensaje
    resultDiv.textContent = message;
}

// Asignar evento al botón
checkGradeButton.addEventListener('click', checkGrade);
