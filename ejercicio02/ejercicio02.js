/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function total() {
  return sum(1, 2) + substract(1, 2) + multiply(1, 2) + divide(1, 2);
}

module.exports = { sum, substract, multiply, divide, total };
