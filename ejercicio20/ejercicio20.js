/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena(array) {
  let password = "eureka";
  let intentos = 0;

  do {
    if (array[intentos] === password) {
      console.log("Contraseña correcta, bienvenido");
      return;
    } else {
      console.log("Contraseña incorrecta, intentelo de nuevo");
    }
    intentos++;
  } while (intentos < array.length);

  if (intentos >= 3) {
    console.log("Has agotado tus intentos");
  }
}

module.exports = { adivinarContrasena };
