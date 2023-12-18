/**
 * Ejercicio 53
 * Diseñar un algoritmo que lea un numero N y retorne cuantos numeros primos hay desde 2
 * hasta N
 */

function isPrimeNumber(N) {
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

function getPrimeNumbers(N) {
	let count = 0;

	// Iterar desde 2 hasta N y contar los números primos
	for (let i = 2; i <= N; i++) {
		if (isPrimeNumber(i)) {
			count++;
		}
	}

	return `Por debajo de ${N} hay ${count} numeros primos`;
}

module.exports = { getPrimeNumbers };
