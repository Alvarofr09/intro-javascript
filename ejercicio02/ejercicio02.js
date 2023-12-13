/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */

function sum(a, b) {
 //Escribe tu codigo aqui
 return a + b;
}

function substract(a, b) {
 //Escribe tu codigo aqui
 return a - b;
}

function multiply(a, b) {
 //Escribe tu codigo aqui
 return a * b;
}

function divide(a, b) {
 //Escribe tu codigo aqui
 return a / b;
}

function total() {
 //Escribe tu codigo aqui
 return sum(1, 2) + substract(1, 2) + multiply(1, 2) + divide(1, 2);
}

module.exports = { sum, substract, multiply, divide, total };
