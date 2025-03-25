function buscarAsientosConsecutivos(butacas, cantidad) {
    for (let i = 0; i < butacas.length; i++) {
        let inicio = -1;
        let contador = 0;

        for (let j = 0; j < butacas[i].length; j++) {
            if (!butacas[i][j].estado) {
                if (contador === 0) inicio = j;
                contador++;
                if (contador === cantidad) {
                    return Array.from({ length: cantidad }, (_, k) => ({
                        fila: i,
                        columna: inicio + k,
                        id: butacas[i][inicio + k].id
                    }));
                }
            } else {
                contador = 0;
            }
        }
    }
    return [];
}

// Matriz de butacas de 10x10 con valores fijos (true = ocupado, false = libre)
const butacas = [
    [ { id: 1, estado: false }, { id: 2, estado: false }, { id: 3, estado: false }, { id: 4, estado: true }, { id: 5, estado: false }, { id: 6, estado: false }, { id: 7, estado: false }, { id: 8, estado: false }, { id: 9, estado: false }, { id: 10, estado: true } ],
    [ { id: 11, estado: true }, { id: 12, estado: false }, { id: 13, estado: false }, { id: 14, estado: false }, { id: 15, estado: false }, { id: 16, estado: true }, { id: 17, estado: false }, { id: 18, estado: false }, { id: 19, estado: false }, { id: 20, estado: true } ],
    [ { id: 21, estado: false }, { id: 22, estado: false }, { id: 23, estado: true }, { id: 24, estado: false }, { id: 25, estado: false }, { id: 26, estado: false }, { id: 27, estado: false }, { id: 28, estado: false }, { id: 29, estado: false }, { id: 30, estado: false } ],
    [ { id: 31, estado: false }, { id: 32, estado: false }, { id: 33, estado: true }, { id: 34, estado: true }, { id: 35, estado: false }, { id: 36, estado: false }, { id: 37, estado: false }, { id: 38, estado: false }, { id: 39, estado: true }, { id: 40, estado: false } ],
    [ { id: 41, estado: false }, { id: 42, estado: false }, { id: 43, estado: false }, { id: 44, estado: false }, { id: 45, estado: false }, { id: 46, estado: false }, { id: 47, estado: false }, { id: 48, estado: false }, { id: 49, estado: false }, { id: 50, estado: false } ],
    [ { id: 51, estado: false }, { id: 52, estado: true }, { id: 53, estado: false }, { id: 54, estado: false }, { id: 55, estado: false }, { id: 56, estado: false }, { id: 57, estado: false }, { id: 58, estado: false }, { id: 59, estado: false }, { id: 60, estado: false } ],
    [ { id: 61, estado: false }, { id: 62, estado: false }, { id: 63, estado: false }, { id: 64, estado: false }, { id: 65, estado: false }, { id: 66, estado: false }, { id: 67, estado: false }, { id: 68, estado: false }, { id: 69, estado: false }, { id: 70, estado: false } ],
    [ { id: 71, estado: false }, { id: 72, estado: false }, { id: 73, estado: false }, { id: 74, estado: false }, { id: 75, estado: false }, { id: 76, estado: false }, { id: 77, estado: false }, { id: 78, estado: false }, { id: 79, estado: false }, { id: 80, estado: false } ],
    [ { id: 81, estado: false }, { id: 82, estado: false }, { id: 83, estado: false }, { id: 84, estado: false }, { id: 85, estado: false }, { id: 86, estado: false }, { id: 87, estado: false }, { id: 88, estado: false }, { id: 89, estado: false }, { id: 90, estado: false } ],
    [ { id: 91, estado: false }, { id: 92, estado: false }, { id: 93, estado: false }, { id: 94, estado: false }, { id: 95, estado: false }, { id: 96, estado: false }, { id: 97, estado: false }, { id: 98, estado: false }, { id: 99, estado: false }, { id: 100, estado: false } ]
];

// Número de asientos consecutivos a buscar
const cantidadAsientos = 3;
const resultado = buscarAsientosConsecutivos(butacas, cantidadAsientos);

console.log("Butacas disponibles:", resultado);