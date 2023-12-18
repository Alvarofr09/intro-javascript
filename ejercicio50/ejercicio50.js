/**
 * Ejercicio 50
 * Hacer un algoritmo que cuente las veces que aparece una determinada
 * letra en una frase que introduciremos por parametros.
 */

function contarLetraEnOracion(oracion, letra) {
	let contador = 0;

	for (let i = 0; i < oracion.length; i++) {
		if (oracion[i].toLowerCase() === letra) {
			contador++;
		}
	}

	return `La letra ${letra} está ${contador} veces repetida`;
}

module.exports = { contarLetraEnOracion };
