/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray(length, max) {
	let array = [];
	for (let i = 0; i < length; i++) {
		let randomNum = Math.floor((Math.random() * max) / 2);
		array[i] = randomNum;
	}

	return array;
}

function calculosArray(array) {
	// let negativos = 0;
	// let positivos = 0;
	// let arrayPositivos = [];
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] < 0) {
	// 		negativos++;
	// 	} else {
	// 		positivos++;
	// 		arrayPositivos.push(array[i]);
	// 	}
	// }
	// return {
	// 	cantidadPositivos: positivos,
	// 	cantidadNegativos: negativos,
	// 	numerosPositivos: arrayPositivos,
	// };
}

module.exports = { generarArray, calculosArray };
