/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(altura) {
	let resultado = "";

	for (let i = 0; i < altura; i++) {
		for (let j = 0; j < altura; j++) {
			if (j === i || j > i) {
				resultado += "*";
			} else {
				resultado += " ";
			}
		}
		resultado += "\n";
	}

	return resultado;
}

module.exports = { crearTriangulo };
