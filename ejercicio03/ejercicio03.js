/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(num1, num2, num3) {
  if (num1 == num2 && num1 == num3) {
    return `iguales`;
  } else {
    if (num1 > num2) {
      if (num1 > num3) {
        return num1;
      } else {
        return num3;
      }
    } else if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}

module.exports = { compareThreeNumbers };
