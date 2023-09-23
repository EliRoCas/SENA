function mostrar(dato) {
    for (let ejercicio = 1; ejercicio <= 7; ejercicio++) {
        document.getElementById('ejemplo' + ejercicio).style.display = "none";
    }

    document.getElementById('ejemplo' + dato).style.display = "block";
}

// Array con 5 números
function ejem01() {
    let numeros01 = [64, 56, 37, 34, 29];
    console.log(numeros01);
    for (let num = 0; num <= numeros01.length; num++) {
        document.getElementById('resultado').innerHTML = `Estos son los 5 números almacenados ${numeros01}`;
    }
}

// Array con números aleatorios, suma de esos números y su media. 
function ejem02() {
    let numeros02 = [];
    while (numeros02.length <= 10) {
        let numAleatorio = Math.floor(Math.random() * 50);
        numeros02.push(numAleatorio);
    }
    let suma = 0;
    for (let sum = 0; sum < numeros02.length; sum++) {
        suma += numeros02[sum];
    }
    let media = suma / numeros02.length;
    document.getElementById('resultado').innerHTML = `Los 10 números son: ${numeros02}. Su media es: ${media}.`;

}

// Array con llenado "automático" por usuario, retornándo los múltiplos del número dado por el usuario.
function ejem03() {
    let longitudArray = parseInt(prompt('Ingrese el tamaño que debe tener el array.'));
    let numeroBase = parseInt(prompt('Ingrese el número del que desea optener los múltiplos.'));
    function arrayRelleno() {
        let numeros03 = [];
        let multiplo = numeroBase;
        while (numeros03.length < longitudArray) {
            numeros03.push(multiplo);
            multiplo += numeroBase;
        }
        return numeros03;
    }
    let resultado = arrayRelleno();
    document.getElementById('resultado').innerHTML = `El número ingresado fue ${numeroBase}, sus múltiplos son ${resultado.join(', ')}.`;
}

//Array con autollenado,  busca un número y regresa su posición o posiciones en el arreglo. 
function ejem04() {
    let valorBuscado = parseInt(prompt('Ingrese el número de 1 a 30 que desea buscar.'));

    let numeros04 = [];
    numeros04.push(4);
    numeros04.push(8);
    numeros04.push(7);
    numeros04.push(12);
    numeros04.push(6);

    while (numeros04.length < 30) {
        let numAleatorio04 = Math.floor(Math.random() * 50);
        numeros04.push(4);
        numeros04.push(numAleatorio04);
        numeros04.push(8);
        numeros04.push(7);
        numeros04.push(numAleatorio04);
        numeros04.push(12);
        numeros04.push(numAleatorio04);
        numeros04.push(6);
        numeros04.push(numAleatorio04);

    }

    const posiciones04 = [];
    for (ubi04 = 0; ubi04 < numeros04.length; ubi04++) {
        if (numeros04[ubi04] === valorBuscado) {
            posiciones04.push(ubi04);
        }
    }

    console.log(numeros04);

    if (posiciones04.length > 0) {
        document.getElementById('resultado').innerHTML = `El número ${valorBuscado} se encuentra en la (o las) posición(es) ${posiciones04.join(', ')}. `;
    }
    else
        document.getElementById('resultado').innerHTML = `${valorBuscado} no se encontró en el arreglo o su formato fue inválido.`

}

function ejem05(){
    
}