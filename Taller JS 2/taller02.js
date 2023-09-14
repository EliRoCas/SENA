//Ejercicio 01 
function ejer01() {
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio
    original y su total con descuento. El descuento lo hace en base a la clave,
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
    en del 20% (sólo existen dos claves).</p>
    <input type="button" value="Enviar" onclick="">
    `;
}



//Ejercicio 05 
function ejer05() {
    document.getElementById('enunciado').innerHTML = `
    <p>Elabore un algoritmo que lea un número negativo e imprima el 
    número y el positivo del mismo.</p>
    <input type="button" value="Enviar" onclick="positivo()">
    `;

}

function positivo() {
    let num, positive;
    num = parseFloat(prompt('Ingrese número negativo'));
    if (num < 0) {
        positive = num * -1;
        document.getElementById('resultado').innerHTML = `El número negativo es ${num}. `;
        document.getElementById('resultado').innerHTML += `El número positivo es ${positive}`;
    }
    else {
        alert('El número no es negativo');
    }
}
//Ejercicio 21
function ejer21() {
    document.getElementById('enunciado').innerHTML = `
    <p>Determinar el promedio de una lista de 20 de números positivos.</p>
    <input type="button" value="Enviar" onclick="pos20()">
    `;
}

function pos20() {
    let Ninicial = parseFloat(prompt('Ingrese el número inicial'));
    let suma = 0;
    let promedio;

    document.getElementById.innerHTML = ` el número inicial fue ${Ninicial}`;

    con = 1;
    while (con <= 20) {
        suma = suma + Ninicial;
        con++;
        Ninicial++;
    }
    promedio = suma / 20;
    document.getElementById('resultado').innerHTML += `El número final fue ${Ninicial}. `;
    document.getElementById('resultado').innerHTML += `El promedio fue ${promedio}`;
}
