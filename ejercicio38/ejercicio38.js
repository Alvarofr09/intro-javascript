/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray(array) {
	let tempArray = [];

	for (let i = array.length - 1; i >= 0; i--) {
		tempArray[array.length - 1 - i] = array[i];
	}

	return tempArray;
}

module.exports = { invertArray };
