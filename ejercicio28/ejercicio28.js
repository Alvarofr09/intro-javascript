/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer(seconds) {
	for (let i = seconds - 1; i >= 0; i--) {
		if (i === 0) {
			console.log(i);
			console.log("¡¡Ring!!");
		} else {
			console.log(i);
		}
	}
}

module.exports = { timer };
