const enunciado12 = document.getElementById('enunciado--eje12');
const result12 = document.getElementById('resultado--eje12');

enunciado12.innerHTML = "Solicitar tres números al usuario e intercambiarlos entre si, solo si el segundo es mayor que el primero y el tercero.";

let num_aa = parseInt(prompt('Ingrese el valor de a '));
let num_bb = parseInt(prompt('Ingrese el valor de b'));
let num_cc = parseInt(prompt('Ingrese el valor de c'));

if (num_bb > num_aa && num_bb > num_cc) {
    [num_aa, num_bb, num_cc] = [num_cc, num_aa, num_bb];
    result12.innerHTML = `El valor de b es mayor que el valor de a y de c. Valores intercambiados: ${num_aa} ${num_bb} ${num_cc}`;
}
else {
    result12.innerHTML = `El valor de b es menor que alguno de los dos valores (a - c). Valores no intercambiados ${num_aa} ${num_bb} ${num_cc}`;
}


// if (num_bb > num_aa && num_bb > num_cc) {
//     let temp = num_bb;
//     num_bb = num_aa;
//     num_aa = num_cc;
//     num_cc = temp;
//     result12.innerHTML = "El valor de b es mayor que el valor de a y de c. Valores intercambiados: "
//         + num_aa
//         + " "
//         + num_bb
//         + " "
//         + num_cc;
// }
// else {
//     result12.innerHTML = "El valor de b es menor que alguno de los dos valores (a - c). Valores no intercambiados" + num_aa + " " + num_bb + " " + num_cc;
// }

