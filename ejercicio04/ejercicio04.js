/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply(num1, num2, num3) {
	//Escribe tu codigo aqui

	if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
		if (num1 < 0) {
			return num1 * num2 * num3;
		} else {
			return num1 + num2 + num3;
		}
	} else {
		return `Has introducido uno o varios caracteres no validos`;
	}
}

module.exports = { sumOrMultiply };
