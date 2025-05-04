//Script defer hace que el script se ejecute después de que se haya procesado el HTML, pero antes la generacion del evento DOMContentLoaded.
//Es seguro usarlo en el head, ya que no bloquea la carga de la pagina.

console.log("Ejecutado con defer, después de que se haya procesado el HTML.");
console.log("Soy un script que accede al DOM y hago mis cosas...");
console.log(document.body.children);