// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: Math.random() < 0.5 // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(asientosReserva, butacas){
    let asientosLibres = [];
    let v = 0;
    let i = butacas.length - 1;
    let j = 0;
    let assigned = false;
    if(asientosReserva <= N){

        //fila
        while(i > 1 && !assigned){
            //silla
            j = 0;
            v = 0;
            while (j < butacas[i].length && !assigned){
                //Validamos estado de la silla
                if(!butacas[i][j].estado){
                    //validar si la cantidad de sillas consecutivas corresponde a la cantidad de asientos solicitados
                    if(v <= asientosReserva){
                        v++;
                    }
                    if(v === asientosReserva){
                        let contadorSet = j - (asientosReserva - 1) ;
                        for (let k = 0; k < asientosReserva; k++){
                            asientosLibres.push(butacas[i][contadorSet]);
                            contadorSet++;
                        }
                        assigned = true;
                    }
                } else {
                    //si la silla está ocupada debe volver a 0
                    v = 0;
                    asientosLibres = [];
                }

                j++;
            }

            i--;
        }
        return asientosLibres;
    }else{
        return asientosLibres;
    }
}

function butacasUI(butacas){
    const layout = document.getElementById("cinema-layout");

    let filas = butacas.length;
    let letraFila = "ABCDEFGHIJ";

    for (let j = 1; j <= filas; j++) {
        let fila = document.createElement("div");
        fila.classList.add("row");
        fila.setAttribute("id", "fila"+j);
        layout.appendChild(fila);

        let nombreFila = document.createElement("div");
        nombreFila.classList.add("rowName");
        nombreFila.innerHTML = letraFila[j-1];
        fila.appendChild(nombreFila);
    }

    butacas.map( butaca => {
        butaca.map( butaca => {
        let nFila = Math.floor((butaca.id - 1) / 10) + 1;
        let seat = document.createElement("div");
        seat.classList.add("seat");
        dispoButacas(seat, butaca);
        seat.setAttribute("id", butaca.id);
        seat.innerHTML = butaca.id;

        let fila = document.getElementById("fila" + nFila);


        fila.appendChild(seat);
        });
    });
}

function dispoButacas(seat, butaca){
    seat.classList.remove("occupied");
    seat.classList.add(butaca.estado ? "occupied" : "available");
}

// Inicializar la matriz
const butacas = setup();
butacasUI(butacas);
let botonReservar = document.getElementById("reservar");
let inputNumSeats = document.getElementById("numSeats");

inputNumSeats.addEventListener("keyup", handlePreReserva);

botonReservar.addEventListener("click", clickReservar);

function clickReservar(){
    let inputNumSeats = document.querySelector("#numSeats").value;
    let asientosReservados = suggest(parseInt(inputNumSeats), butacas);
    let result = asientosReservados.map(asiento => asiento.id).join()
    console.log("Asientos sugeridos",result);
}

function handlePreReserva(){
    let flatButacas = butacas.flat();
    let seats = document.getElementsByClassName("seat");
    [...seats].forEach(seat =>{
        let currentButaca = flatButacas.find(butaca => parseInt(butaca.id) === parseInt(seat.id));
        dispoButacas(seat, currentButaca);
    })
    let asientosReservados = suggest(parseInt(this.value), butacas);
    asientosReservados.map(asiento => {
        let currentSeat = document.getElementById(asiento.id);
        currentSeat.classList.remove("available");
        currentSeat.classList.remove("occupied");
        currentSeat.classList.add("occupied");
    })
}