/*
 * Ejercicio clockAngle
 *
 * Escribe un método que, dandole un número N que representa dónde
 * se encuentra actualmente el
 * minutero en un reloj, devuelva el ángulo
 * formado por el minutero y la marca de las 12 en punto en el reloj.
 *
 * El numero no podra ser mayor que 60, si lo fuera, el algoritmo retornara
 * que el numero introducido es incorrecto
 */

function simpleClockAngle(num) {
	let angle = 360 / 60;
	if (num <= 0 || num > 12) {
		return "El numero introducido es incorrecto";
	} else {
		return angle * num;
	}
}

module.exports = { simpleClockAngle };
