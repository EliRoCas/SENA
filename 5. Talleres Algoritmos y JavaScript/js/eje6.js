document.getElementById('enunciado--eje6').innerHTML = "Diseñe un algoritmo que calcule la nota final de un estudiante con los siguientes porcentajes: primer parcial 30%, segundo parcial 30% y examen final 40%. Al final determine si pudo aprobar o no la asignatura. La nota mínima aprobatoria es 3.2 (Tres punto Dos).";

let nota_final, nota_parcial1, nota_parcial2, nota_parcial3;

nota_parcial1 = parseFloat(prompt('Ingrese la nota de su primer parcial'));
nota_parcial2 = parseFloat(prompt('Ingrese la nota de su segundo parcial'));
nota_parcial3 = parseFloat(prompt('Ingrese la nota de su examen final'));

nota_final = (nota_parcial1 * 0.3 + nota_parcial2 * 0.3 + nota_parcial3 * 0.4);

if (nota_final >= 3.2) {
    document.getElementById('resultado--eje6').innerHTML = "Felicitaciones, aprobó. Su nota final es: " + nota_final;
}
else {
    document.getElementById('resultado--eje6').innerHTML = "Reprobó. Su nota final es: " + nota_final;
}