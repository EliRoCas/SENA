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
    document.getElementById('resultado').innerHTML=`El número ingresado fue ${numeroBase}, sus múltiplos son ${resultado.join(', ')}.`;
}

function ejem04(){
    
}
