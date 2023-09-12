document.getElementById('enunciado--eje7').innerHTML = "Calcule e imprima el pago mensual para un vendedor de autos, basándose en lo siguiente: a. El pago base es de $350, más una comisión de $15 por cada auto vendido y un bono de 40$ si vendió mas de 15 autos. b. El impuesto a pagar es el 25% del pago total c. Los datos de entrada son el nombre del vendedor y el número de autos vendidos en el mes d. Se desea imprimir el nombre del vendedor, el sueldo bruto, el impuesto y el sueldo neto";

let nombre = prompt('Nombre');
let num_autos = parseInt(prompt('Número de autos vendidos en el mes'));
const pago_base = 350;
let comision = 15 * num_autos;
let bono = 0;

if (num_autos > 15) {
    bono = 40;
}

let sueldo_bruto  = pago_base + comision + bono;
const impuesto = sueldo_bruto * 0.25;
let sueldo_neto = sueldo_bruto - impuesto;


document.getElementById('resultado--eje7').innerHTML = "Vendedor: " + nombre + " su sueldo bruto es: " + sueldo_bruto + ", el impuesto es: " + impuesto + ", por tanto su sueldo neto es: " + sueldo_neto;




// Forma inicial
// let pago_base, comision, bono, impuesto, sueldo_bruto, sueldo_neto, nombre, num_autos;

// nombre=prompt('Nombre');
// num_autos=parseInt(prompt('Número de autos vendidos en el mes'));

// pago_base=350;
// comision=15*num_autos;
// bono=0;
// if (num_autos>15) {
//     bono=40;
// }
// sueldo_bruto=pago_base+comision+bono;
// impuesto=sueldo_bruto*0.25;

// sueldo_neto=sueldo_bruto-impuesto;

// document.getElementById('resultado--eje7').innerHTML="Vendedor: " + nombre + " su sueldo bruto es: " + sueldo_bruto + ", el impuesto es: " + impuesto + ", por tanto su sueldo neto es: " + sueldo_neto;
