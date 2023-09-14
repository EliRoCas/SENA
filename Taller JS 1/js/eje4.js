document.getElementById('enunciado--eje4').innerHTML="Determine si un viajero de una Aerolínea puede tomar un tiquete determinado en clase: Ejecutiva, Normal o Económica. Dependiendo de los puntos que ten a puede tener acceso a cada clase. Más de 2000 puntos puede estar en Ejecutiva, entre 1000 y 1999 puede estar en Normal y menos de 1000 puede estar en Económica.";

let num_puntos;

num_puntos = parseInt(prompt('Ingrese la cantidad de puntos que posee'));

if (num_puntos >= 2000) {
    document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Ejecutiva ";
}
else if (num_puntos < 2000 && num_puntos >= 1000) {
    document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Normal";
}
else if (num_puntos < 1000) {
    document.getElementById('resultado--eje4').innerHTML="Puede estar en clase Económica";
}