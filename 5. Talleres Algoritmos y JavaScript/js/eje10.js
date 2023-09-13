document.getElementById('enunciado--eje10').innerHTML = "Dadas las notas parciales de 3 estudiantes, calcule la nota definitiva de cada uno de ellos y determine que estudiante obtuvo mejor rendimiento académico y cual obtuvo el mas bajo rendimiento académico.";

let notaEstudiante1_parcial1, notaEstudiante1_parcial2, notaEstudiante1_parcial3;

notaEstudiante1_parcial1 = parseFloat(prompt('Ingrese la primera nota del estudiante 1'));
notaEstudiante1_parcial2 = parseFloat(prompt('Ingrese la segunda nota del estudiante 1'));
notaEstudiante1_parcial3 = parseFloat(prompt('Ingrese la tercera nota del estudiante 1'));

const nota_definitiva = (notaEstudiante1_parcial1 + notaEstudiante1_parcial2 + notaEstudiante1_parcial3) / 3;

let notaEstudiante2_parcial1, notaEstudiante2_parcial2, notaEstudiante2_parcial3;

notaEstudiante2_parcial1 = parseFloat(prompt('Ingrese la primera nota del estudiante 2'));
notaEstudiante2_parcial2 = parseFloat(prompt('Ingrese la segunda nota del estudiante 2'));
notaEstudiante2_parcial3 = parseFloat(prompt('Ingrese la tercera nota del estudiante 2'));

const nota_definitiva2 = (notaEstudiante2_parcial1 + notaEstudiante2_parcial2 + notaEstudiante2_parcial3) / 3;

let notaEstudiante3_parcial1, notaEstudiante3_parcial2, notaEstudiante3_parcial3;

notaEstudiante3_parcial1 = parseFloat(prompt('Ingrese la primera nota del estudiante 3'));
notaEstudiante3_parcial2 = parseFloat(prompt('Ingrese la segunda nota del estudiante 3'));
notaEstudiante3_parcial3 = parseFloat(prompt('Ingrese la tercera nota del estudiante 3'));

const nota_definitiva3 = (notaEstudiante3_parcial1 + notaEstudiante3_parcial2 + notaEstudiante3_parcial3) / 3;

const mejorEstudiante = `${nota_definitiva > nota_definitiva2 && nota_definitiva > nota_definitiva3
  ? "Estudiante 1"
  : (nota_definitiva2 > nota_definitiva && nota_definitiva2 > nota_definitiva3)
    ? "Estudiante 2"
    : "Estudiante 3"}`;

const peorEstudiante = `${nota_definitiva < nota_definitiva2 && nota_definitiva < nota_definitiva3
  ? "Estudiante 1"
  : (nota_definitiva2 < nota_definitiva && nota_definitiva2 < nota_definitiva3)
    ? "Estudiante 2"
    : "Estudiante 3"} `;

// if (nota_definitiva > nota_definitiva2 && nota_definitiva > nota_definitiva3) {
//   mejorEstudiante = "Estudiante 1";
// } else if (nota_definitiva2 > nota_definitiva && nota_definitiva2 > nota_definitiva3) {
//   mejorEstudiante = "Estudiante 2";
// } else {
//   mejorEstudiante = "Estudiante 3";
// }

// if (nota_definitiva < nota_definitiva2 && nota_definitiva < nota_definitiva3) {
//   peorEstudiante = "Estudiante 1";
// } else if (nota_definitiva2 < nota_definitiva && nota_definitiva2 < nota_definitiva3) {
//   peorEstudiante = "Estudiante 2";
// } else {
//   peorEstudiante = "Estudiante 3";
// }

document.getElementById('resultado--eje10').innerHTML = `La nota definitiva del estudiante 1 es: ${nota_definitiva}. La nota definitiva del estudiante 2 es: ${nota_definitiva2}. La nota definitiva del estudiante 3 es: ${nota_definitiva3}. El mejor estudiante fue: ${mejorEstudiante} y el peor: ${peorEstudiante}`;



