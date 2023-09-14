const enunciado14 = document.getElementById('enunciado--eje14');
const result14 = document.getElementById('resultado--eje14');

enunciado14.innerHTML = "Determinar el nivel de un empleado según las siguientes condiciones: a. Nivel 1 si el sueldo es menor a 500 y lleva menos de 4 años en la empresa b. Nivel 2 si el sueldo esta entre 501 y 1000 lleva menos de 4 años en la empresa c. Nivel 3 no importa el sueldo, solo que lleve mas de 10 años en la empresa d. Nivel 4 para los que lleven entre 5 y 9 años en la empresa y ganen menos de 2000. e. Los demás están en el nivel 0.";

const sueldo = parseInt(prompt('Ingrese su sueldo'));
const years = parseInt(prompt('¿Cuántos años lleva en la compañia?'));

if (sueldo <= 500 && years <= 4) {
    result14.innerHTML = "Su nivel es 1.";
}
else if (sueldo >= 501 && sueldo <= 1000 && years <= 4) {
    result14.innerHTML = "Su nivel es 2.";
}
else if (years >= 10) {
    result14.innerHTML = "Su nivel es 3.";
}
else if (sueldo <= 2000 && years >= 5 && years <= 9) {
    result14.innerHTML = "Su nivel es 4";
}
else {
    result14.innerHTML = "Su nivel es 0.";
}
