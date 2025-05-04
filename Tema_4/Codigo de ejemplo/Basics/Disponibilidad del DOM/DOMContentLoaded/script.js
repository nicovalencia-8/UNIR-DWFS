//El evento DOMContentLoaded se dispara cuando el documento HTML ha sido completamente cargado y parseado, sin esperar a que se carguen las imágenes y subrecursos.
//Este evento es muy útil para cargar scripts que necesitan acceder al DOM, ya que no necesitan esperar a que se carguen los recursos.
//El CSS y las imágenes pueden tardar en cargarse, pero el DOM estará disponible para manipularlo.

//Es seguro usarlo en el head, ya que no bloquea la carga de la página.

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM esta completamente cargado y procesado.");
    console.log("Soy un script que accede al DOM y hago mis cosas...");
    console.log(document.body.children);
});
