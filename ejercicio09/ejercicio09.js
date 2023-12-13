/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia(note1, note2, note3, note4, note5) {
  if (
    isNaN(note1) ||
    isNaN(note2) ||
    isNaN(note3) ||
    isNaN(note4) ||
    isNaN(note5)
  ) {
    return `Debes introducir solo numeros. Intentalo de nuevo`;
  } else {
    let media = (note1 + note2 + note3 + note4 + note5) / 5;

    if (media < 5) {
      return `${media} suspenso`;
    } else {
      return `${media} aprobado`;
    }
  }
}

module.exports = { notaMedia };
