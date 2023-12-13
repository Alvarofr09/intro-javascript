// Ejercicio 12
// Construir un diagrama de flujo que te permita calcular la temperatura
// teniendo en cuenta el numero de sonidos emitidos por un grillo en un
// minuto, es una funcion que depende de la temperatura. Como resultado
// de esto, es posible determinar el nivel de temperatura haciendo uso
// de un grillo como termometro. La formula es:

// T = N / 4 + 40, donde T es la temperatura en grados
// centigrados y N es el numero de sonidos emitidos por segundo.

// Como el aparato para medir los sonidos puede fallar, tener en cuenta que si
// el numero de sonidos es 0, es un error y debe de imprimir error.

function temperaturaGrillo(sonidosGrillo) {
  if (sonidosGrillo > 0) {
    let temperatura = sonidosGrillo / 4 + 40;
    return temperatura;
  } else {
    return "Error";
  }
}

module.exports = { temperaturaGrillo };
