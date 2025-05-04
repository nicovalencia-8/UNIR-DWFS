//Script Async hace que el script se ejecute en paralelo con la carga del HTML.
//No es seguro usarlo en el head, ya que puede bloquear la carga de la página.

console.log("Ejecutado con async, el orden no esta garantizado.");
console.log("Soy un script que accede al DOM y hago mis cosas...");
console.log(document.body.children);