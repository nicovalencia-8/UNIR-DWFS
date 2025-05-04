// El evento onload se dispara cuando todos los recursos (HTML, imágenes, CSS y otros scripts) están completamente cargados.
// Es seguro usarlo en el head, ya que no bloquea la carga de la página.

window.onload = () => {
    console.log("Todos los recursos (imagenes, CSS, scripts) estan completamente cargados.");
    console.log("Soy un script que accede al DOM y hago mis cosas...");
    console.log(document.body.children);
};
