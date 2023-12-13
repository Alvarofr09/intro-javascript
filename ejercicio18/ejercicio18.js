/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {
  let total = 0;
  let numeroActual;

  if (N % 2 === 0) {
    numeroActual = N;
  } else {
    numeroActual = N + 1;
  }

  let i = 0;

  do {
    total += numeroActual;
    numeroActual += 2;
    i++;
  } while (i < N);

  return total;
}

module.exports = { sumaNPrimerosNumerosPares };
