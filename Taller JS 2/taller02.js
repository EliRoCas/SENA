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
    for (let y = 1; y <= 200; y++) {
        if (y % 6 === 0) {
            document.getElementById('resultado').innerHTML += `, ${y}`;
        }
    }
    for (let x = 200; x >= 20; x--) {
        if (x % 8 === 0) {
            document.getElementById('resultado').innerHTML += `, ${x}`;
        }
    }
}

//Ejercicio 10
function ejer10() {

    document.getElementById('enunciado').innerHTML = `
    <p>Realizar un programa que capture el nombre de dos personas y las fechas
    de nacimiento con cada campo por separado día, mes y año y calcule la
    edad de dos personas diferentes y diga cuál de ellos es mayor.</p>
    <input type="button" value="Enviar" onclick="ejer10Result()">
    `;
}

function ejer10Result() {
    function calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const birthday = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - birthday.getFullYear();

        const cumpleEsteAnio = birthday.setFullYear(hoy.getFullYear());
        if (hoy < cumpleEsteAnio) {
            edad--;
        }

        return edad;
    }

    const namePersona1 = prompt("Ingresa el nombre de la primera persona:");
    const datePersona1 = parseInt(prompt("Ingresa el día de nacimiento de la primera persona:"));
    const monthPersona1 = parseInt(prompt("Ingresa el mes de nacimiento de la primera persona (1-12):"));
    const yearPersona1 = parseInt(prompt("Ingresa el año de nacimiento de la primera persona:"));

    const namePersona2 = prompt("Ingresa el nombre de la segunda persona:");
    const datePersona2 = parseInt(prompt("Ingresa el día de nacimiento de la segunda persona:"));
    const monthPersona2 = parseInt(prompt("Ingresa el mes de nacimiento de la segunda persona (1-12):"));
    const yearPersona2 = parseInt(prompt("Ingresa el año de nacimiento de la segunda persona:"));

    const edadPersona1 = calcularEdad(`${yearPersona1}-${monthPersona1}-${datePersona1}`);
    const edadPersona2 = calcularEdad(`${yearPersona2}-${monthPersona2}-${datePersona2}`);

    let personaMayor = "";
    switch (true) {
        case edadPersona1 > edadPersona2:
            personaMayor = namePersona1;
            break;
        case edadPersona2 > edadPersona1:
            personaMayor = namePersona2;
            break;
        default:
            personaMayor = "Ninguna, ambas personas tienen la misma edad.";
    }

    document.getElementById('resultado').innerHTML = `${namePersona1} tiene ${edadPersona1} años. ${namePersona2} tiene ${edadPersona2} años. La persona mayor es: ${personaMayor}`;
}

//Ejercicio 11
function ejer11() {

    document.getElementById('enunciado').innerHTML = `
    <p>Un programa que me capture el salario de un empleado y me realice el
    descuento de pensión y salud, pero si el salario es superior a 1200000 no le
    debe descontar.</p>
    <input type="button" value="Enviar" onclick="ejer11Result()">
    `;
}

// En Colombia, para este año, el descuento por salud es del 12.5% y para pensión es del 16%
function ejer11Result() {
    const salarioBruto = parseFloat(prompt('Ingrese su salario base (sin ningún descuento)'));
    const salud = salarioBruto * 0.125;
    const pension = salarioBruto * 0.16;
    document.getElementById('resultado').innerHTML = `Su salario neto es: ${salarioBruto >= '1200000'
        ? salarioBruto
        : salarioBruto - salud - pension}`;
}

//Ejercicio 12
function ejer12() {

    document.getElementById('enunciado').innerHTML = `
    <p>Un programa que, capture el salario de un empleado, y lo divida por 30
    días del mes, también debe capturar los días trabajados y me debe
    mostrar el total ganado.</p>
    <input type="button" value="Enviar" onclick="ejer12Result()">
    `;
}

function ejer12Result() {
    const salarioMes = parseFloat(prompt('Ingrese el salario mensual'));
    const salarioDiaTrabajo = salarioMes / 30;
    const diasTrabajados = parseFloat(prompt('¿Cuántos días trabajó este mes?'))
    let salarioTrabajador = salarioDiaTrabajo * diasTrabajados;
    document.getElementById('resultado').innerHTML = `Usted trabajó ${diasTrabajados} días; por tanto su salario neto es ${salarioTrabajador}`;
}

//Ejercicio 13
function ejer13() {

    document.getElementById('enunciado').innerHTML = `
    <p>Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por
    4 y 5 y decir si son pares o impares.</p>
    <input type="button" value="Enviar" onclick="ejer13Result()">
    `;
}

function ejer13Result() {
    const par = " el número es par";
    const impar = "el número es impar";
    for (let a = 1; a <= 1500; a++) {
        if (a % 4 === 0 && a % 2 == 0) {
            document.getElementById('resultado').innerHTML += `, <br> ${a}  ${par}`;
        }
        else if (a % 5 === 0 && a % 2 !== 0) {
            document.getElementById('resultado').innerHTML += `, <br> ${a} ${impar}`;
        }
    }

}

//Ejercicio 14
function ejer14() {

    document.getElementById('enunciado').innerHTML = `
    <p>Elaborar un algoritmo que tenga 10 números enteros. El programa debe
    sumar todos los números que sean múltiplos de 3.</p>
    <input type="button" value="Enviar" onclick="ejer14Result()">
    `;
}

function ejer14Result() {
    const divisible3 = "es un número divisible por 3. Agregado a la suma."
    let sumaEnteros = 0;
    for (let z = 1; z <= 10; z++) {
        document.getElementById('resultado').innerHTML += `,<br> ${z}`;
        if (z % 3 === 0) {
            document.getElementById('resultado').innerHTML += `, <br> ${sumaEnteros += z}, ${divisible3}`;
        }
    }
}

//Ejercicio 15
function ejer15() {

    document.getElementById('enunciado').innerHTML = `
    <p>Mostrar las 30 primeras potencias de 3 y la suma de ellos.</p>
    <input type="button" value="Enviar" onclick="ejer15Result()">
    `;
}
function ejer15Result() {
    let sumaPotencias3 = 0;
    for (let n = 0; n <= 30; n++) {
        let potencia3 = Math.pow(3, n);
        document.getElementById('resultado').innerHTML += `<br> La potencia es ${potencia3}. 
         Las potencias sumadas dan ${sumaPotencias3 += (potencia3)}`
    }
}


//Ejercicio 16
function ejer16() {

    document.getElementById('enunciado').innerHTML = `
    <p>Un programa con 5 alumnos cada uno con 5 notas, calcular el promedio de
    sus notas por alumnos y solo muestra los que ganaron.</p>
    <input type="button" value="Enviar" onclick="ejer16Result()">
    `;
}

function ejer16Result() {
    let promedio = 0;
    for (let student = 1; student <= 5; student++) {
        const nombreEstudiante = prompt(`Ingrese el nombre del Estudiante ${student}`);
        let sumaNotas = 0;

        for (let notaEst = 1; notaEst <= 5; notaEst++) {
            let notasEstu = parseFloat(prompt(`Ingrese la nota ${notaEst}`));
            sumaNotas += notasEstu;
        }
        promedio = sumaNotas / 5;
        if (promedio <= 3) {
            document.getElementById('resultado').innerHTML += `<br> El estudiante ${student, nombreEstudiante}, obtuvo un promedio de ${promedio.toFixed(2)}. Aprobó.`
        }
    }
}


//Ejercicio 17
function ejer17() {

    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo, con el dividendo y el divisor y que luego me calcule el
    residuo y el cociente de dicha división.</p>
    <input type="button" value="Enviar" onclick="ejer17Result()">
    `;
}

function ejer17Result() {
    const dividendo = parseFloat(prompt('Ingrese el número que va a dividir (dividendo).'));
    const divisor = parseFloat(prompt('Ingrese el númer por el que lo va a dividir (divisor)'));
    const cociente = dividendo / divisor;
    const residuo = dividendo % divisor;

    document.getElementById('resultado').innerHTML = `${dividendo} dividido ${divisor} es igual a ${cociente}, el residuo es ${residuo}.`;
}

//Ejercicio 18
function ejer18() {

    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que intercambie los valores de dos variables
    numéricas.</p>
    <input type="button" value="Enviar" onclick="ejer18Result()">
    `;
}

function ejer18Result() {
    let x = parseFloat(prompt('Ingrese el valor de x'));
    let y = parseFloat(prompt('Ingrese el valor de y'));

    document.getElementById('resultado').innerHTML = `Los valores ingresados son x = ${x}, y= ${y}, los valores intercambiados son ${[x, y] = [y, x]}`;
}

//Ejercicio 19
function ejer19() {

    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que me permita ingresar un valor inicial y luego un
    valor final, para luego calcular el valor central de los números.</p>
    <input type="button" value="Enviar" onclick="ejer19Result()">
    `;
}

function ejer19Result() {
    const numeroInicial = parseFloat(prompt('Ingrese el valor inicial'));
    const numeroFinal = parseFloat(prompt('Ingrese el valor final'));
    document.getElementById('resultado').innerHTML = `El valor inicial es 
${numeroInicial}, el valor final es 
${numeroFinal}. El valor central entre ellos es 
${(numeroInicial + numeroFinal) / 2}`;
}

//Ejercicio 20
function ejer20() {

    document.getElementById('enunciado').innerHTML = `
    <p>Se desea calcular independientemente la suma de los números pares e
    impares comprendidos entre 1 y 50.</p>
    <input type="button" value="Enviar" onclick="ejer20Result()">
    `;
}

function ejer20Result() {
    let sumarPar = 0;
    let sumarImpar = 0;
    for (number20 = 1; number20 <= 50; number20++) {
        if (number20 % 2 == 0) {
            sumarPar += number20;
            document.getElementById('resultado').innerHTML += ` ${number20} es par. Sumado al par anterior es igual a ${sumarPar}<br>`;
        }
        else if (number20 % 2 !== 0) {
            sumarImpar += number20;
            document.getElementById('resultado').innerHTML += ` ${number20} es impar. Sumado al impar anterior es igual a ${sumarImpar}<br>`;
        }

    }
}


//Ejercicio 21
function ejer21() {
    document.getElementById('enunciado').innerHTML = `
    <p>Determinar el promedio de una lista de 20 de números positivos.</p>
    <input type="button" value="Enviar" onclick="ejer21Result()">
    `;
}

function ejer21Result() {
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

//Ejercicio 22
function ejer22() {

    document.getElementById('enunciado').innerHTML = `
    <p>Diseñar un algoritmo que calcule los 5 primeros números impares que
    preceden a un numero N</p>
    <input type="button" value="Enviar" onclick="ejer22Result()">
    `;
}

function ejer22Result() {
    document.getElementById('resultado').innerHTML = "";
    const numEjer22 = parseFloat(prompt('Ingrese el número natural (N)'));
    let contador = 0;
    for (numX = numEjer22; numX >= 1; numX--) {

        if (numX % 2 !== 0 && contador < 5) {
            contador++;
            document.getElementById('resultado').innerHTML += `${numX}, `;
        }
    }
    if (contador < 5) {
        alert('El número es muy pequeño, por tanto no tiene 5 números impares que lo precedan');
    }
}

//Ejercicio 23
function ejer23() {

    document.getElementById('enunciado').innerHTML = `
    <p>Hacer un programa que muestre si los cincos primeros numeros impares
    son múltiples de tres arrancando de 10</p>
    <input type="button" value="Enviar" onclick="ejer23Result()">
    `;
}

function ejer23Result() {
    for (let numEjer23 = 10; numEjer23 <= 20; numEjer23++) {
        
        if (numEjer23 % 2 !== 0 && numEjer23 % 3 !== 0) {
            document.getElementById('resultado').innerHTML += ` <br> ${numEjer23} es impar, pero no divisible por 3`;
        }
        else if (numEjer23 % 2 !== 0 && numEjer23 % 3 === 0) {
            document.getElementById('resultado').innerHTML += ` <br> ${numEjer23} es impar y es divisible por 3`;
        }
        else {
            document.getElementById('resultado').innerHTML += `<br> ${numEjer23}`;
        }
    }
}
