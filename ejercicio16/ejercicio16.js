/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */

function cuadraroNumerosNaturales() {
	//Escribe tu codigo aqui
	let array = [];
	for (let i = 0; i <= 9; i++) {
		array[i] = Math.pow(i, 2);
	}

	return array;
}

module.exports = { cuadraroNumerosNaturales };
