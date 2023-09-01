const enunciado13 = document.getElementById('enunciado--eje13');
const result13 = document.getElementById('resultado--eje13');

enunciado13.innerHTML = "Para lograr ser monitor de la Universidad en las salas de sistemas, los estudiantes deben obtener un promedio integral superior a 4.0 y no tener antecedentes disciplinarios. Ayúdele a un estudiante a saber si puede optar por ser monitor de la institución.";

let promedio_integral, antecedentes;

promedio_integral = parseFloat(prompt('Ingrese su promedio integral'));
antecedentes = prompt('¿Tiene antecedentes disciplinarios?');

if (promedio_integral >= 4.0 && (
    antecedentes === 'no'
    || antecedentes === 'No'
    || antecedentes === 'NO'
    || antecedentes === 'nO')) {
    result13.innerHTML = "Usted cumple con todos los requisitos, puede optar para ser monitor.";
}
else {
    result13.innerHTML = "Usted inclumple con algún requisitos, no puede optar para ser monitor."
}