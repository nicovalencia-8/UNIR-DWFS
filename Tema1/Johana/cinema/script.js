document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".seat.available");
    const reserveButton = document.querySelector("form button");
    const seatInput = document.getElementById("numSeats");

    // Matriz de butacas (asientos disponibles = 0, ocupados = 1)
    let seatsMatrix = {
        A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        C: [0, 0, 0, 0, 0, 1, 0, 0, 1, 0], // Asientos C6 y C9 ya ocupados (1)
        D: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        E: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };

    let selectedSeats = [];

    // Manejo de selección de butacas
    seats.forEach(seat => {
        seat.addEventListener("click", function () {
            const seatId = this.dataset.seat; // Ejemplo: "A1"
            const row = seatId[0]; // Letra de la fila
            const col = parseInt(seatId.substring(1)) - 1; // Número de asiento

            if (seatsMatrix[row][col] === 1) {
                alert("Este asiento ya está reservado.");
                return;
            }

            // Alternar selección
            if (selectedSeats.includes(seatId)) {
                selectedSeats = selectedSeats.filter(s => s !== seatId);
                this.classList.remove("selected");
            } else {
                selectedSeats.push(seatId);
                this.classList.add("selected");
            }
        });
    });

    // Manejo de reserva
    reserveButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar recarga de página

        if (selectedSeats.length === 0) {
            alert("Por favor, seleccione al menos una butaca.");
            return;
        }

        const numRequested = parseInt(seatInput.value) || 0;
        if (numRequested !== selectedSeats.length) {
            alert(`Debe seleccionar exactamente ${numRequested} butacas.`);
            return;
        }

        // Marcar butacas como ocupadas en la matriz y en la UI
        selectedSeats.forEach(seatId => {
            const row = seatId[0];
            const col = parseInt(seatId.substring(1)) - 1;

            seatsMatrix[row][col] = 1; // Actualiza la matriz
            document.querySelector(`[data-seat="${seatId}"]`).classList.replace("selected", "occupied");
            document.querySelector(`[data-seat="${seatId}"]`).textContent = "X";
        });

        // Vaciar la selección
        selectedSeats = [];
        alert("Reserva completada con éxito.");
    });
});
