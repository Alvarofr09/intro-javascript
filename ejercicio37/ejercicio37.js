/**
 * Ejercicio 37
 * Crear un algoritmo que reciba el numero de DNI sin la letra y nos retornara el DNI
 * con su letra correspondiente. Para calcular la letra, cogeremos el resto del DNI y lo dividiremos
 * entre 23. Utilizaremos el resultado de la division para buscar en un array de caracteres la posicion
 * que corresponda a la letra.
 * 
 * El algoritmo retornara `DNI completo: XXXXXXX`
 * 
 * La tabla de caracteres es la siguiente
 * 
 *  "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E"
 */

function crearDni(dni) {
	let charDni = [
		"T",
		"R",
		"W",
		"A",
		"G",
		"M",
		"Y",
		"F",
		"P",
		"D",
		"X",
		"B",
		"N",
		"J",
		"Z",
		"S",
		"Q",
		"V",
		"H",
		"L",
		"C",
		"K",
		"E",
	];

	let numChar = dni % 23;

	return `DNI Completo: ${dni}${charDni[numChar]}`;
}

module.exports = { crearDni };
