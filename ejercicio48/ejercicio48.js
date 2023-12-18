/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}

	return array;
}

module.exports = { ordenarArray };
