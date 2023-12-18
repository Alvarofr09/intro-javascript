/**
 * Ejercicio 52
 *  Rellenar un array con una longitud 10 y
 *  numeros aleatorios entre 1 y 15.
 *  Posteriormente, hacer un algoritmo que reciba este array
 *  aleatorio y un numero introducido por parametros que nos diga
 *  si este numero esta incluido en el array o no. El algoritmo retornara
 *  true si se encuentra el numero y false si no;
 */

function generateRandomArray() {
	let array = [];
	for (let i = 0; i < 10; i++) {
		array[i] = Math.floor(Math.random() * 14) + 1;
	}

	return array;
}

function findNumberInArray(array, num) {
	for (let i = 0; i < array.length; i++) {
		if (num === array[i]) {
			return true;
		}
	}

	return false;
}

module.exports = { findNumberInArray, generateRandomArray };
