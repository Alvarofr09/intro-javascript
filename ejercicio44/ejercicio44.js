/**
 * Ejercicio 44
 * El usuario tiene el siguiente menu:
 *
 *  Seleccione el numero de una de las siguientes opciones:
 *  1: Sumar
 *  2: Restar
 *  3: Multiplicar
 *  4: Dividir
 *  5: Salir del programa.
 *
 * Debera generar un algoritmo que reciba por parametros 3 numeros. El primer numero,
 * sera la opcion elegida del menu, y los siguientes dos numeros se usaran en la operacion
 * correspondiente a la seleccionada del menu.
 *
 * EJEMPLO: Si introduce 1,2,4. El usuario recibira 6.
 */

function seleccionarNumeroMenu(operation, num1, num2) {
	switch (operation) {
		case 1:
			return num1 + num2;

		case 2:
			return num1 - num2;

		case 3:
			return num1 * num2;

		case 4:
			return num1 / num2;

		case 5:
			return "Has salido correctamente del programa";

		default:
			return "No has introducido un numero correcto. El numero debe estar entre 1 y 5";
	}
}

module.exports = { seleccionarNumeroMenu };
