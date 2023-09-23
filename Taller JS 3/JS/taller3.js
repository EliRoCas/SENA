function mostrar(dato) {
    for (let ejercicio = 1; ejercicio <= 7; ejercicio++) {
        document.getElementById('ejemplo' + ejercicio).style.display = "none";
    }

    document.getElementById('ejemplo' + dato).style.display = "block";
}

function ejem01() {
    let numeros01 = [64, 56, 37, 34, 29];
    console.log(numeros);
    for (let num = 0; num <= numeros01.length; num++) {
        document.getElementById('resultado').innerHTML = `Estos son los 5 números almacenados ${numeros01}`;
    }
}

function ejem02() {
    let numeros02 = [];
    while (numeros02.length < 10) {
        let numAleatorio = Math.random
    }

}

