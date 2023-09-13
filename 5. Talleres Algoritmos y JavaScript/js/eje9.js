document.getElementById("enunciado--eje9").innerHTML = "Diseñe un algoritmo que dada una nota (numérica) determine el estado de un estudiante según la siguiente tabla: EXCELENTE: 5.0, BUENO: entre 4.0 y 4.9, REGULAR: entre 3.0 y 3.9 y DEFICIENTE: entre 0 y 2.9.";

let nota, prom_excelente, prom_bueno, prom_regular, prom_deficiente;
prom_excelente = "";
prom_bueno = "";
prom_regular = "";
prom_deficiente = "";
let aprobacion = "Su nota de aprobación es";

nota = parseFloat(prompt('Ingrese su nota final'));

switch (true) {
    case nota == 5.0:
        prom_excelente = `¡Felicitaciones! ${aprobacion} EXCELENTE`;
        break;
    case nota >= 4.0 && nota <= 4.9:
        prom_bueno = `¡Casi! ${aprobacion} BUENO`;
        break;
    case nota >= 3.0 && nota <= 3.9:
        prom_regular = `${aprobacion} REGULAR`;
        break;
    default:
        prom_deficiente = `Debe esforzarse más, ${aprobacion} DEFICIENTE`;
        break;
}

document.getElementById('resultado--eje9').innerHTML = `Su nota es ${nota} ${prom_excelente} ${prom_bueno} ${prom_regular} ${prom_deficiente}`;


// if (nota == 5.0){
//     prom_excelente="¡Felicitaciones! Su nota de aprobación es EXCELENTE";
// }
// else if (nota >=4.0){
//     prom_bueno="¡Casi! Su nota de aprobación es BUENO";
// }
// else if (nota >=3.0){
//     prom_regular=". Su nota de aprobación es REGULAR";
// }
// else if (nota <=2.9){
//     prom_deficiente=". Debe esforzarse más, su nota de aprobación es DEFICIENTE";
// }

// document.getElementById('resultado--eje9').innerHTML="Su nota es: " + nota + " "+ prom_excelente + prom_bueno + prom_regular + prom_deficiente;