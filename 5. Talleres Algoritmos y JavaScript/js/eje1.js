document.getElementById('enunciado--eje1').innerHTML = "A través de un algoritmo ayude a un usuario de Megabus a saber cuántos pasajes tiene según el cupo de su tarjeta. Cada pasaje cuesta $1.700 pesos. Además es impor ante alertar al usuario cuando su cupo se encuentre con menos de 2 pasajes, se le informa que debe recargar su tarjeta."

let num_pasajes, cupo, alerta;

const v_pasaje = 1700;

cupo = prompt("Ingrese el valor del cupo de su tarjeta");

num_pasajes = cupo / v_pasaje;

document.getElementById('resultado--eje1').innerHTML = "La cantidad de pasajes que tiene es " + num_pasajes;

// Como se haría sin interpolación y operaciones ternarias

// if (num_pasajes <= 2) {
//alerta = "Usted tiene 2 o menos pasajes, por tanto, debe recargar su tarjeta"
//}
//else {
//  alerta = `Usted tiene ${num_pasajes} pasajes`
//}

alerta = `Usted tiene ${num_pasajes <= 2 ? `2 o menos pasajes, por tanto, debe recargar` : `${num_pasajes} pasajes`}`;

alert(alerta);