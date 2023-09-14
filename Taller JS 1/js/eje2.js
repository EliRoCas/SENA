document.getElementById('enunciado--eje2').innerHTML = "Haga el algoritmo que, dada una variable cuyo valor es leído desde el teclado, imprima por pantalla si el número es o no mayor que 0 (cero)."

let valor1;
valor1 = parseInt(prompt('Ingrese un número'))
if (valor1 > 0) {
    document.getElementById('resultado--eje2').innerHTML = "El número ingresado es mayor que cero. Sú número es " + valor1

} else {
    document.getElementById('resultado--eje2').innerHTML = "El número ingresado no es mayor que cero. Sú número es " + valor1

}


