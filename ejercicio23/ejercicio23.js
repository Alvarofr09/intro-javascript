/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */

function fechaIntroducida(dia, mes, año) {
  if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || año <= 0) {
    return "Has introducido mal alguna parte de la fecha";
  }

  if (mes === 2) {
    if (dia > 29) {
      if (año % 4 !== 0 || (año % 100 === 0 && año % 400 !== 0)) {
        return "Has introducido mal alguna parte de la fecha";
      }
    } else if (dia === 29 && año % 4 !== 0) {
      return "Has introducido mal alguna parte de la fecha";
    }
  }

  switch (mes) {
    case 1:
      mes = "enero";
      break;

    case 2:
      mes = "febrero";
      break;

    case 3:
      mes = "marzo";
      break;

    case 4:
      mes = "abril";
      break;

    case 5:
      mes = "mayo";
      break;

    case 6:
      mes = "junio";
      break;

    case 7:
      mes = "julio";
      break;

    case 8:
      mes = "agosto";
      break;

    case 9:
      mes = "septiembre";
      break;

    case 10:
      mes = "octubre";
      break;

    case 11:
      mes = "noviembre";
      break;

    case 12:
      mes = "diciembre";
      break;
  }

  return `${dia} de ${mes} del ${año}`;
}

module.exports = { fechaIntroducida };
