/**
 * Ejercicio 40
 * Generar un array de 10 elementos con numeros aleatorios no repetidos entre si
 */

function generarArrayNoRepetidos() {
	let array = [];

	for (let i = 0; i < 10; i++) {
		let randomNum;
		let isRepeat;

		do {
			randomNum = Math.floor(Math.random() * 10) + 1;
			isRepeat = false;

			for (let j = 0; j < array.length; j++) {
				if (randomNum === array[j]) {
					isRepeat = true;
					break;
				}
			}
		} while (isRepeat);

		array[i] = randomNum;
	}

	return array;
}

module.exports = { generarArrayNoRepetidos };
