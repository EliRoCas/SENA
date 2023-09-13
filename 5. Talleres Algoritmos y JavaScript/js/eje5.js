document.getElementById('enunciado--eje5').innerHTML = "Escriba un algoritmo que intercambie el valor de dos variables numéricas sólo si el valor de la primera es mayor que el de la segunda.";

let num_a = parseInt(prompt('Ingrese el valor de a '));
let num_b = parseInt(prompt('Ingrese el valor de b'));
//let temp;
let final = document.getElementById('resultado--eje5');

// Con desestructuración de arreglos, para intercambiar los valores de a y b 
if (num_a > num_b) {
    [num_a, num_b] = [num_b, num_a];
    final.innerHTML = "El valor a fue mayor que el valor b. Valores intercambiados: a= " + num_a + " b=" + num_b;
}
else {
    final.innerHTML = "El valor a fue menor que el valor b. Valores no intercambiados: a=" + num_a + "b= " + num_b;
}


// if (num_a > num_b) {
//     let temp=num_a;
//     num_a=num_b;
//     num_b=temp;
//     document.getElementById('resultado--eje5').innerHTML= "El valor a fue mayor que el valor b. Valores intercambiados: " + num_a + " " + num_b;
// }
// else document.getElementById('resultado--eje5').innerHTML= "El valor a fue menor que el valor b. Valores no intercambiados: " + num_a + " " + num_b;


// Con interpolación, ternarios y desestructuración de arreglos - No funciona el mensaje completo
//final.innerHTML=`El valor a fue ${num_a> num_b ? "mayor a b" [num_a, num_b]=[num_b, num_a]
//: "menor que b. Valores no intercambiados"}`;


