/**
 * Ejercicio 51
 * Comprobar si un numero N positivo es primo. Se diec que un numero entero
 * positivo N es un numero primo si los unicos enteros positivos que lo dividen son
 * exactamente 1 y N (el mismo)
 */

function getPrimeNumber(N) {
	if (N <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(N); i++) {
		if (N % i === 0) {
			return false;
		}
	}

	return true;
}

module.exports = { getPrimeNumber };
