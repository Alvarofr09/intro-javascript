/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {
	//Escribe tu codigo aqui
	let total = 0;

	for (let i = 0; i < N; i++) {
		total += N * 2 + i * 2;
	}

	return total;
}

module.exports = { sumaNPrimerosNumerosPares };
