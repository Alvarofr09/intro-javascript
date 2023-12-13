/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldoTrabajador, category) {
  switch (category) {
    case 1:
      return sueldoTrabajador + sueldoTrabajador * 0.15;
      break;

    case 2:
      return sueldoTrabajador + sueldoTrabajador * 0.1;
      break;

    case 3:
      return sueldoTrabajador + sueldoTrabajador * 0.06;
      break;

    case 4:
      return sueldoTrabajador + sueldoTrabajador * 0.03;
      break;

    case 5:
      return sueldoTrabajador;
      break;
  }
}

module.exports = { nuevoSalario };
