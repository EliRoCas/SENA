document.getElementById('enunciado--eje3').innerHTML = "Diseñe un algoritmo que, dada una variable cuyo valor es leído desde el teclado, imprima por pantalla si el número es o no mayor que 0 (cero), y si el número es par o impar.";
let numero = parseFloat(prompt('Ingrese nuevamente el número'));
let solucion = document.getElementById('resultado--eje3');


solucion.innerHTML = `El número ingresado es ${numero > 0 ? "mayor" : "no es mayor"} que cero. Su número es ${numero} y es ${numero % 2 === 0 ? "par":"impar"}`;

// switch (true) 
// {
//     case (numero > 0 && numero % 2 === 0):
//         solucion.innerHTML = "El número ingresado es mayor que cero. Su número es " + numero + " y es par";
//         break;
//     case (numero > 0 && numero % 2 !== 0):
//         solucion.innerHTML = "El número ingresado es mayor que cero. Su número es " + numero + " y es impar";
//         break; 
//     case (numero < 0 && numero % 2 ===0): 
//         solucion.innerHTML="El número ingresado es menor que cero. Su número es " + numero + " y es par";
//         break;
//     case (numero < 0 && numero % 2 !== 0): 
//         solucion.innerHTML="El número ingresado es menor que cero. Su número es " + numero + " y su número es impar"; 
//         break; 
// }


// if (numero > 0 && numero % 2 == 0) {
//     document.getElementById('resultado--eje3').innerHTML = "El número ingresado es mayor que cero. Su número es " + numero + " y es par";
// }
// else if (numero > 0 && numero % 2 !== 0) {
//     document.getElementById('resultado--eje3').innerHTML = "El número ingresado es mayor que cero. Su número es " + numero + " y es impar";
// }
// else if (numero < 0 && numero % 2 == 0) {
//     document.getElementById('resultado--eje3').innerHTML = "El número ingresado es menor que cero. Su número es " + numero + " y es par";
// }
// else {
//     document.getElementById('resultado--eje3').innerHTML = "El número ingresado es menor que cero. Su número es " + numero + " y es impar";
        
// }

