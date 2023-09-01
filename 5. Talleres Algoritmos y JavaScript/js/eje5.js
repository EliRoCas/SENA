document.getElementById('enunciado--eje5').innerHTML = "Escriba un algoritmo que intercambie el valor de dos variables numéricas sólo si el valor de la primera es mayor que el de la segunda.";

let num_a;
let num_b;

num_a = parseInt(prompt('Ingrese el valor de a '));
num_b = parseInt(prompt('Ingrese el valor de b'));


if (num_a > num_b) { 
    let temp=num_a;
    num_a=num_b;
    num_b=temp;
    document.getElementById('resultado--eje5').innerHTML= "El valor a fue mayor que el valor b. Valores intercambiados: " + num_a + " " + num_b;
}
else document.getElementById('resultado--eje5').innerHTML= "El valor a fue menor que el valor b. Valores no intercambiados: " + num_a + " " + num_b;
