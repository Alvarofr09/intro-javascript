/**
 *  Ejercicio 1
 * Dadas dos variables numéricas A y B,
 * se pide realizar un algoritmo que intercambie los valores de ambas
 * variables y retorne un string con las variables concatenadas.
 */

function swapVariables(a, b) {
  let temp = a;
  a = b;
  b = temp;

  return `${a} ${b}`;
}

module.exports = { swapVariables };
