// 14.	Crea una aplicación web que muestre información básica de los primeros 12 Pokémon (IDs del 1 al 12). La aplicación debe cumplir exactamente lo siguiente:
// •	Mostrar tarjetas de Pokémon
// •	La aplicación debe mostrar solo 3 Pokémon a la vez
// •	Cada Pokémon debe aparecer dentro de una tarjeta que muestre:
//      Imagen, nombre, ID
// •	Navegación entre grupos de 3 Pokémon
// •	Agrega dos botones:
//      o	Anterior y Siguiente cuyo comportamiento debe ser:
//               Botón “Siguiente”
//               	Al presionarlo, debe mostrar los siguientes 3 Pokémon
//               Botón “Anterior”
//               	Debe volver al grupo de 3 Pokémon anterior
// Tips:
// -	Para cargar la información primero debes obtener los Pokémon del 1 al 12 (puedes cargarlos todos al iniciar)
// -	Las tarjetas mostradas deben provenir de esa lista ya cargada
console.log("Ejercicio 12 (14.)\n\"Tarjetas de pokemon\"");

// Se recogen los botones
let btnAnt = document.getElementById("btn-ej12-ant");
let btnSig = document.getElementById("btn-ej12-sig");
let posPokemon = 0; // contador de pokemos universal. Con este se manejará la ubicación de los doce primeros pokemones
const card = document.querySelectorAll(".card"); // Etiqueta HTML de las cartas

// Función async/await para mostrar los pokemones, tanto para siguientes como para anteriores
async function mostrarPokemon() {
    console.log("Posición: " + posPokemon);
    let pokemones = []; // Array que almacena el texto para cada tarjeta
    try {
        // Ciclo for para recorrer los tres próximas tarjetas desde el posPokemon
        for (let i = 0; i < 3; i++) {
            let pokemonID = posPokemon + i + 1; // Contador interno para buscar ID's
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

            if (!pokemon.ok) {
                throw new Error("Error en la solicitud: " + pokemon.status);
            }

            const data = await pokemon.json();
            // Contenido para imprimir
            let contenido = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>ID: </strong>${data.id}</p>
            `;
            pokemones[i] = contenido;
        }
        
        // For-each para insertar el contenido del array en cada etiqueta div, usando dataset
        card.forEach(index => {
            const id = index.dataset.id;
            index.innerHTML = pokemones[id - 1];
        });

    } catch (error) {
        console.error("ERROR:", error);
    }
}

mostrarPokemon(); // Se muestra por defecto los tres primeros.

// Botones y sus eventos
btnSig.addEventListener("click", (e) => {

    e.preventDefault();

    posPokemon += 3; // Aumenta 3 al posPokemon

    // Condicional que verifica si el posPokemon es mayor o igual a 12, si no lo vuelve 0 para empezar de nuevo
    if (posPokemon >= 12) {
        posPokemon = 0;
    }
    
    mostrarPokemon(); // Como el posPokemon es solo un punto de partida, y ya se retrocedió más arriba, se llama a esta función para mostrar las tarjetas

});

// Para anteriores. Lo mismo que los siguientes pero retrocediendo 3 índices.
btnAnt.addEventListener("click", (e) => {

    e.preventDefault();

    posPokemon -= 3;

    if (posPokemon < 0) {
        posPokemon = 9;
    }
    
    mostrarPokemon();

});