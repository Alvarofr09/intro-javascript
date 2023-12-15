/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
 */
function relojInfinito() {
	let horas = 0;
	let minutos = 0;
	let segundos = 0;

	let horasString = "";
	let minutosString = "";
	let segundosString = "";

	setInterval(() => {
		segundos++;

		if (segundos === 60) {
			minutos++;
			segundos = 0;
		}

		if (minutos === 60) {
			horas++;
			minutos = 0;
		}
		if (horas === 24) {
			segundos = 0;
			horas = 0;
		}

		if (segundos < 10) {
			segundosString = "0" + segundos;
		} else {
			segundosString = segundos;
		}

		if (minutos < 10) {
			minutosString = "0" + minutos;
		} else {
			minutosString = minutos;
		}

		if (horas < 10) {
			horasString = "0" + horas;
		} else {
			horasString = horas;
		}

		console.log(`${horasString}:${minutosString}:${segundosString}`);
	}, 1000);
}

module.exports = { relojInfinito };
