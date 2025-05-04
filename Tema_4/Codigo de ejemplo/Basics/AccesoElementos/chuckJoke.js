export async function getJoke() {
    let url = "https://api.chucknorris.io/jokes/random";
    let fetchResponse = await fetch(url);
    let json = await fetchResponse.json();
    let joke = json.value;
    document.getElementById("joke").innerHTML = joke;

    //Obtenemos el ultimo parrafo del body, y creamos un nuevo parrafo tras el con el chiste
    let paragraph = document.createElement('p');
    paragraph.innerHTML = joke;
    document.body.appendChild(paragraph);
}

export function clearJoke() {
    document.body.removeChild(document.body.lastChild);
}