/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
 *  numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(row) {
	let resultado = "";
	for (let i = 1; i <= row; i++) {
		for (let j = 1; j <= i; j++) {
			resultado += String(j);
		}
		resultado += "\n";
	}

	return resultado;
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(row) {
	let resultado = "";
	for (let i = 1; i <= row; i++) {
		for (let j = 1; j <= i; j++) {
			resultado += String(i);
		}
		resultado += "\n";
	}

	return resultado;
}

// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(row) {
	let resultado = "";
	let contador = 0;
	for (let i = 1; i <= row; i++) {
		for (let j = 1; j <= i; j++) {
			resultado += contador++ + " ";
		}
		resultado += "\n";
	}

	return resultado;
}

module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
