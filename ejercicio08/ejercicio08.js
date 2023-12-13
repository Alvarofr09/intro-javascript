/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

function incrementarSueldo(sueldoTrabajador) {
  if (sueldoTrabajador < 1000) {
    let nuevoSueldoTrabajador = sueldoTrabajador + sueldoTrabajador * 0.15;
    return nuevoSueldoTrabajador;
  } else if (sueldoTrabajador === 1000) {
    return sueldoTrabajador;
  } else {
    return sueldoTrabajador;
  }
}

module.exports = { incrementarSueldo };
