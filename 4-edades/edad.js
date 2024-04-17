/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/


function calcularEdad(fechaNacimiento) {
  var hoy = new Date();
  var cumple = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - cumple.getFullYear();
  var mes = hoy.getMonth() - cumple.getMonth();
  var dia = hoy.getDay() - cumple.getDay();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
  }
  if (dia < 0 || (dia === 0 && hoy.getDate() < cumple.getDate())) {
    edad--;
}

return edad;
}



var jugador = {
  nombre: "Luciano",
  apellido: "Rodriguez",
  apodo: "Lucho",
  fechaNacimiento: "2003-04-18"
};

console.log(jugador.nombre + ' "'   + jugador.apodo  + '" ' +  jugador.apellido + ' (' + calcularEdad(jugador.fechaNacimiento) + ' años)')