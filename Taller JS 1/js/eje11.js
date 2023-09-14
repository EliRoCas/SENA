const enunciado11 = document.getElementById('enunciado--eje11');
const result11 = document.getElementById('resultado--eje11');

enunciado11.innerHTML = "Escribir un algoritmo que determine el equipo en el que será asignado un jugador. Se tiene como datos: nombre, cédula y edad. Y se clasifica en cada equipo así: Profesionales para jugadores entre 25 y 40 años, aficionados entre 18 y 24 años, Novatos entre 12 y 17 años. Otras edades no pueden ser asignados a ningún equipo.";

let name = prompt('Ingrese su nombre completo');
let cedula = prompt('Ingrese su número de cédula');
let edad = prompt('Ingrese su edad');

const profesionales = "";
const aficionados = "";
const novatos = "";

if (edad >= 25 && edad <= 40) {
    result11.innerHTML = "Usted está clasificado como profesional";
}
else if (edad >= 18 && edad <= 24) {
    result11.innerHTML = "Usted está clasificado como afisionado";
}
else if (edad >= 12 && edad <= 17) {
    result11.innerHTML = "Usted está clasificado como novato";
}
else {
    result11.innerHTML = "Usted no puede clasificar a ninguna categoría";
}
