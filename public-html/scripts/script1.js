// 3.	Pide al usuario un ID de Pokémon y muestra en consola su name
console.log("Ejercicio 1 (3.)\n\"Llamando a pokeapi\"");

let id = parseFloat(prompt("Ingrese un ID de un pokemón:"));

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // Se modifica para detectar id's
    .then(response => response.json()) // Se convierte a json
    .then(data => {
        console.log("Nombre del pokemon con id " + id + ": " + data.name); // Se imprime el name
    })
    .catch(err => console.error("Error:", err));

// ===========================================================================================================================================
