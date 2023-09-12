document.getElementById('enunciado--eje4').innerHTML = "Determine si un viajero de una Aerolínea puede tomar un tiquete determinado en clase: Ejecutiva, Normal o Económica. Dependiendo de los puntos que ten a puede tener acceso a cada clase. Más de 2000 puntos puede estar en Ejecutiva, entre 1000 y 1999 puede estar en Normal y menos de 1000 puede estar en Económica.";

let num_puntos = parseInt(prompt('Ingrese la cantidad de puntos que posee'));
let solt = document.getElementById('resultado--eje4');

solt.innerHTML=`Puede estar en clase ${num_puntos>=2000 ? "Ejecutiva" : (num_puntos < 2000 && num_puntos >= 1000) ? 'Normal': 'Eco'} `;

// switch (true) {
//     case num_puntos >= 2000:
//         solt.innerHTML = "Puede estar en clase Ejecutiva";
//         break;
//     case num_puntos < 2000 && num_puntos >= 1000:
//         solt.innerHTML = "Puede estar en clase Normal";
//         break;
//     case num_puntos < 1000:
//         solt.innerHTML = "Puede estar en clase Económica";
//         break;
// }


// if (num_puntos >= 2000) {
//     document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Ejecutiva ";
// }
// else if (num_puntos < 2000 && num_puntos >= 1000) {
//     document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Normal";
// }
// else if (num_puntos < 1000) {
//     document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Económica";
// }