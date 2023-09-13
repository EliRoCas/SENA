document.getElementById('enunciado--eje8').innerHTML = "Escribir algoritmos que calculen y saquen por pantalla: a. El máximo de tres números introducidos por teclado; b. El mínimo de tres números dados por el usuarios c. El promedio de tres números dados por el usuarioDiseñe algoritmos que permitan d. Determinar si una letra pulsada por el usuario es mayúscula o minúscula. e. Indique si un carácter es un digito numérico.";

let num1_usu = parseInt(prompt('Ingrese su primer número '));
let num2_usu = parseInt(prompt('Ingrese su segundo número '));
let num3_usu = parseInt(prompt('Ingrese su tercer número '));

let maximo= Math.max(num1_usu, num2_usu, num3_usu);
let minimo = Math.min(num1_usu, num2_usu, num3_usu);
let promedio = (num1_usu + num2_usu + num3_usu) / 3;

let text_max = `El máximo entre los tres números ingresados es: ${maximo}`;
let text_min = `. El mínimo entre los tres números ingresados es: ${minimo}`;
let text_promedio = `. El promedio de tres números ingresados es: ${promedio}`;


let mayuscula, caracter;

mayuscula = prompt('Ingrese una letra');
let text_mayuscula = "";
let text_minuscula = "";

if (/^[A-Z]$/.test(mayuscula)) {
    text_mayuscula = `. Su letra es ${mayuscula}. Su letra es mayuscula`;
}
else if (/^[a-z]$/.test(mayuscula)) {
    text_mayuscula = `. Su letra es ${mayuscula}. Su letra es minuscula`;
}

caracter = prompt('Ingrese un caracter');

let text_caracter, text_caracterNN;
text_caracter = "";
text_caracterNN = "";

if (/^\d$/.test(caracter)) {
    text_caracter = `. Su caracter es el número ${caracter}`;
}
else {
    text_caracterNN = `. Lo sentimos, ${caracter}, no es es un número`;
}

document.getElementById('resultado--eje8').innerHTML = ` ${text_max} ${text_min} ${text_promedio} ${text_mayuscula} ${text_minuscula} ${text_caracter} ${text_caracterNN}`;