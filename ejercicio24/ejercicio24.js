/**
 *  Ejercicio 24
 *  Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno
 *  se calcula según el siguiente criterio: la parte práctica vale el 10%; la parte
 *  de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre
 *  del alumno, las tres notas Y escribirá el resultado. Las notas deben
 *  estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje
 *  de error y volverá a pedir otro alumno.
 *
 *  Los mensajes de error debe ser los siguientes; 'Ha habido un error con tus notas. Deben
 *  estar entre 1 y 10'. 'Error al recibir el nombre' (En caso de que se introduzca una cadena vacia).
 *
 *  Si todo es correcto el algorimo debera imprimir 'NombreAlumno tu nota final es de NotaFinal sobre 10'
 */

function notaAlumno(nombre, note1, note2, note3) {
	if (nombre === "") {
		return "Error al recibir el nombre";
	}

	if (
		note1 <= 0 ||
		note1 > 10 ||
		note2 <= 0 ||
		note2 > 10 ||
		note3 <= 0 ||
		note3 > 10
	) {
		return "Ha habido un error con tus notas. Deben estar entre 1 y 10";
	}

	note1 = note1 * 0.1;
	note2 = note2 * 0.5;
	note3 = note3 = 0.4;

	let media = note1 + note2 + note3;

	return `${nombre} tu nota final es de ${media} sobre 10`;
}

module.exports = { notaAlumno };
