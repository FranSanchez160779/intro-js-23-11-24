// Pedir la calificación numérica al usuario
const grade = parseFloat(prompt("Introduce la calificación (0-10):"));

// Determinar la calificación en letras
if (grade < 5) {
    console.log("SUSPENSA");
} else if (grade >= 5 && grade < 7) {
    console.log("APROBADA");
} else if (grade >= 7 && grade < 9) {
    console.log("NOTABLE");
} else if (grade >= 9 && grade < 10) {
    console.log("SOBRESALIENTE");
} else if (grade === 10) {
    console.log("MATRÍCULA DE HONOR");
} else {
    console.log("Calificación inválida.");
}
