/**
 * Ejercicio 45
 * Generar un algoritmo que tras recibir por parametros un array, nos genere otro pero solamente
 * incluyendo aquellos que sean pares y mayores de 25. Si el numero en una posicion no cumpliese las
 * condiciones el algoritmo rellenara su hueco con un 0.
 */

function generarVector(array) {
	let anotherArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0 && array[i] > 25) {
			anotherArray[i] = array[i];
		} else {
			anotherArray[i] = 0;
		}
	}

	return anotherArray;
}

module.exports = { generarVector };
