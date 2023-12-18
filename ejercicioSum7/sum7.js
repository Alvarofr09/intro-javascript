/**
 * Ejercicio sum7
 * Escribe una función que tome un array de numeros enteros de mas de 3 elementos
 * y retorne true si 3 elementos consecutivos suman 7
 */

function lucky_sevens(array) {
	if (array.length > 2) {
		for (let i = 0; i <= array.length - 3; i++) {
			const sumaConsecutiva = array[i] + array[i + 1] + array[i + 2];

			if (sumaConsecutiva === 7) {
				return true;
			}
		}
	}

	return false;
}

module.exports = { lucky_sevens };
