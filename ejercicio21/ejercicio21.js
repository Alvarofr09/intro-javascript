/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(array) {
  let suma = 0;
  let cantidad = 0;
  let max = 0;
  let min = array[0];
  for (let i = 0; array[i] !== 0; i++) {
    suma += array[i];
    cantidad++;

    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  let average = suma / cantidad;

  let respuesta = {
    average,
    max,
    min,
  };

  return respuesta;
}

module.exports = { maxMinAverageUntilZero };
