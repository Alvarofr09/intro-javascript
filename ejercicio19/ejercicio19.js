/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {
  let suma = 0;
  let cantidad = 0;
  let i = 0;

  while (i < array.length && array[i] !== -1) {
    suma += array[i];
    cantidad++;
    i++;
  }

  if (cantidad === 0) {
    return 0;
  }

  return suma / cantidad;
}

module.exports = { mediaArrayHastaMenosUno };
