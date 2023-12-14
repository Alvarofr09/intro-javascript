/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(array) {
	for (let i = 1; i <= array.length; i++) {
		console.log(`El cubo de ${i} es ${Math.pow(i, 3)}`);
	}
}

module.exports = { cuboNumerosArray };
