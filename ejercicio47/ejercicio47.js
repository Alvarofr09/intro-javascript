/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] < array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
}

module.exports = { ordenar };
