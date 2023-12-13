/**
 *  Ejercicio 22
 *  Algoritmo que imprima la cuenta y los numeros
 *  que son multiplos de 2 o de 3 qye hay entre 1 y 100.
 */

function multiplosDeCien() {
  let cantidad = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      cantidad++;
    }
  }

  return cantidad;
}

module.exports = { multiplosDeCien };
