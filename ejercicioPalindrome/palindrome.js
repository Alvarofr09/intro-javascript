/**
 * Ejercicio Palindrome
 * Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
 * string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */

function palindrome(frase) {
	var re = /[\W_]/g;
	let frase1 = frase.toLowerCase().replace(re, "");

	let fraseReversed = frase1.split("").reverse().join("");

	return frase1 === fraseReversed;
}

module.exports = { palindrome };
