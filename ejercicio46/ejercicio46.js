//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente(A, B, C) {
	let primero;
	let segundo;
	let tercero;
	if (A >= B && A >= C) {
		primero = A;
		if (B >= C) {
			segundo = B;
			tercero = C;
		} else {
			segundo = C;
			tercero = B;
		}
	} else if (B >= A && B >= C) {
		primero = B;
		if (A >= C) {
			segundo = A;
			tercero = C;
		} else {
			segundo = C;
			tercero = A;
		}
	} else {
		primero = C;
		if (A >= B) {
			segundo = A;
			tercero = B;
		} else {
			segundo = B;
			tercero = A;
		}
	}

	return { 1: primero, 2: segundo, 3: tercero };
}

module.exports = { imprimirDescendente };
