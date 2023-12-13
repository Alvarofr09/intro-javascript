/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(N) {
  let total = 0;

  for (let i = 0; i <= N; i++) {
    total = total + i;
  }

  return total;
}

module.exports = { calcularSumaNumerosNaturales };
