/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(arrayUno, arrayDos) {
	let boolean = true;
	for (let i = 0; i < arrayUno.length; i++) {
		if (arrayUno[i] !== arrayDos[i]) {
			boolean = false;
		}
	}

	return boolean;
}

module.exports = { sonIguales };
