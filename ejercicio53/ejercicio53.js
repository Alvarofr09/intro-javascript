/**
 * Ejercicio 53
 * Usar una funcion para calcular el promedio recibiendo un array.
 */

function getAverage(array) {
	let contador = array.length;
	let total = 0;

	for (let i = 0; i < array.length; i++) {
		total = total + array[i];
	}

	return total / contador;
}

module.exports = { getAverage };
