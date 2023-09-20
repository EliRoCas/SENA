//Ejercicio 01 
function ejer01() {
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que imprima el nombre de un producto, clave, precio
    original y su total con descuento. El descuento lo hace en base a la clave,
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
    en del 20% (sólo existen dos claves).</p>
    <input type="button" value="Enviar" onclick="ejer01Result()">
    `;
}

function ejer01Result() {
    let productName = prompt('Ingrese el nombre del producto');
    let keyWord = prompt('Digite la clave del producto');
    if (keyWord != "01" && keyWord != "02") {
        alert("La clave ingresada no es válida.");
        return;
    }
    let productPrice = parseFloat(prompt('Digite el valor del producto'));
    let discount = productPrice * (keyWord == "01" ? 0.1 : 0.20);

    // switch (true) {
    //     case keyWord == "01":
    //         discount = productPrice * 0.1;
    //         break;
    //     case keyWord == "02":
    //         discount = productPrice * 0.20;
    //         break;
    // }

    document.getElementById('resultado').innerHTML = `El producto ${productName} tiene un costo de ${productPrice}. Su descuento fue de ${discount}. Valor a pagar ${productPrice - discount};`
};

//Ejercicio 2
function ejer02() {
    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas,
    precio de las camisas 25000. Si se compran tres camisas o más se aplica
    un descuento del 20% sobre el total de la compra y si son menos de tres
    camisas un descuento del 10%.</p>
    <input type="button" value="Enviar" onclick="ejer02Result()">
    `;
}

function ejer02Result() {
    const shirtPrice = 25000;
    const numShirt = parseFloat(prompt('Ingrese el número de camisas a comprar.'));
    const totalNoDiscount = shirtPrice * numShirt;
    let totalDiscount = numShirt >= 3 ? totalNoDiscount * 0.2 : totalNoDiscount * 0.1;
    let total = document.getElementById('resultado').innerHTML = `Valor a pagar ${totalNoDiscount - totalDiscount}`;
}

// Ejercicio 03 
function ejer03() {
    document.getElementById('enunciado').innerHTML = `
    <p>En un supermercado se hace una promoción, mediante la cual el cliente
    obtiene un descuento dependiendo de un número que se escoge al azar los
    numeros deben de estar entre 1 y 10. Si el número escogido es menor que
    10 el descuento es del 15% sobre el total de la compra, si es menor o igual
    a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</p>
    <input type="button" value="Enviar" onclick="ejer03Result()">
    `;
}

function ejer03Result() {
    const totalPago = parseFloat(prompt('Ingrese el valor total de la compra'));
    const numeroDescuento = parseInt(prompt('Ingrese un número del 1 al 10'));

    let rebaja = totalPago * (/[1-5]/.test(numeroDescuento)
        ? 0.2
        : numeroDescuento >= 6 && numeroDescuento <= 10
            ? 0.15
            : 0);

    document.getElementById('resultado').innerHTML = `El valor a pagar es ${totalPago - rebaja}`;
}

//Ejercicio 04
function ejer04() {
    document.getElementById('enunciado').innerHTML = `
    <p>Calcular el número de pulsaciones que debe tener una persona por cada 10
    segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es
    femenino es: 
    <ul> 
    <li> num. pulsaciones ← (220 - edad)/10 </li> 
    </ul>
    Si el sexo es masculino:
    <ul>
    <li>num. pulsaciones ← (210 - edad)/10 </li> 
    </ul>
    </p>
    <input type="button" value="Enviar" onclick="ejer04Result()">
    `;
}

function ejer04Result() {
    const edad = parseInt(prompt('Ingrese su edad.'));
    let sexo = prompt('Ingrese el sexo femenino o masculino');
    let numPulsacionesF = (220 - edad) / 10;
    let numPulsacionesM = (220 - edad) / 10;
    document.getElementById('resultado').innerHTML = `Su número de pulsaciones por cada 10 segundos de ejercicio debe ser: <br> 
    ${sexo === "masculino"
            ? numPulsacionesM
            : numPulsacionesF}`;
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
        document.getElementById('resultado').innerHTML = `El número negativo es ${num}. El número positivo es ${positive}`;
    }
    else {
        alert('El número no es negativo');
    }
}

//Ejercicio 06 
function ejer06() {

    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un algoritmo que permita pasar de kilogramos a gramos y toneladas.</p>
    <input type="button" value="Enviar" onclick="ejer06Result()">
    `;
}

function ejer06Result() {
    const masa = parseFloat(prompt('Ingrese la cantidad o masa a convertir. (No incluya la unidad de medida)'));
    const unidadBase = prompt('Ingrese en que unidad está su masa. (Use las convenciones kg para kilogramos, g para gramos y t para tonelada) ')
    const unidadMedida = prompt('Ingrese la unidad de medida a la que quiere convertir. (Use las convenciones kg para kilogramos, g para gramos y t para tonelada).');
    const ecuacionKgaG = masa * (1000 / 1);
    const ecuacionGaT = masa * (1 / 1000) * (1 / 1000);


    switch (true) {
        case unidadBase === 'kg' && unidadMedida === 'g':
            document.getElementById('resultado').innerHTML = `${masa} ${unidadBase} son ${ecuacionKgaG} ${unidadMedida}`;
            break;
        case unidadBase === 'g' && unidadMedida === 't':
            document.getElementById('resultado').innerHTML = `${masa} ${unidadBase} son ${ecuacionGaT} ${unidadMedida}`;
            break;
        default:
            alert('los datos ingresados no son válidos');
    }
}

// Ejercicio 07
function ejer07() {

    document.getElementById('enunciado').innerHTML = `
    <p>Un paquete de galletas cuesta $3.500 y contiene 15 galletas, ¿cuánto
    cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener
    la respuesta.</p>
    <input type="button" value="Enviar" onclick="ejer07Result()">
    `;
}

function ejer07Result() {
    const paquete = 3500;
    const nGalletas = parseFloat(prompt('Ingrese la cantildad de galletas que desea adquierir.'));
    let costoUd = (paquete / 15);
    document.getElementById('resultado').innerHTML = `${nGalletas} galletas le cuestan ${costoUd * nGalletas}`;

}

// Ejercicio 08
function ejer08() {

    document.getElementById('enunciado').innerHTML = `
    <p>Si 15 cuadernos cuestan $75000, ¿cuánto cuestan X cantidad de
    cuadernos?. Elabore un algoritmo para hallar la respuesta correcta.</p>
    <input type="button" value="Enviar" onclick="ejer08Result()">
    `;
}

function ejer08Result() {
    const paqueteCuadernos = 75000;
    const nCuadernos = parseFloat(prompt('Ingrese la cantidad de cuadernos que desea adquierir.'));
    let costoUdC = (paqueteCuadernos / 15);
    document.getElementById('resultado').innerHTML = `${nCuadernos} cuadernos le cuestan ${costoUdC * nCuadernos}`;
}

//Ejercicio 09
function ejer09() {

    document.getElementById('enunciado').innerHTML = `
    <p>Realizar un programa que cuente de 1 a 200 e imprima en pantalla los
    números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva
    hasta 20 e imprima los divisibles por 8.</p>
    <input type="button" value="Enviar" onclick="ejer09Result()">
    `;
}

function ejer09Result() {

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

    document.getElementById('resultado').innerHTML = ` el número inicial fue ${Ninicial}`;

    let consecutivo = 1;
    while (consecutivo <= 20) {
        suma = suma + Ninicial;
        consecutivo++; //con = con + 1: // con += 1
        Ninicial++;
    }

    promedio = suma / 20;
    document.getElementById('resultado').innerHTML += `El número final fue ${Ninicial}. El promedio fue ${promedio}`;
}
