window.onload = function () {
    // el primer elemento de tipo button
    let buttonGet = document.querySelector("#button-get");
    let buttonRemove = document.querySelector("#button-remove");

    buttonGet.onclick = function () {
        getJoke();
    };

    buttonRemove.onclick = function () {
        clearJoke();
    };
};

async function getJoke() {
    let url = "https://api.chucknorris.io/jokes/random";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let joke = json.value;

    //Obtenemos el ultimo parrafo del body, y creamos un nuevo parrafo tras el con el chiste
    let paragraph = document.createElement('p');
    paragraph.innerHTML = joke;
    document.body.appendChild(paragraph);
}

function clearJoke() {
    document.body.removeChild(document.body.lastChild);
}
