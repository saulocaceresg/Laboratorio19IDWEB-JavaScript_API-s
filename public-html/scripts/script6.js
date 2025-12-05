// 8.	Obtener un Pokémon aleatorio. Genera un número del 1 al 898 y busca ese Pokémon
console.log("Ejercicio 6 (8.)\n\"Pokemon aleatorio\"");

let random = Math.floor(Math.random() * (898 - 1 + 1) + 1);

fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(response => response.json())
    .then(data => {
        console.log("Pokemon:", data.name);
        console.log("ID:", data.id);
    })
    .catch(error => console.error("Error:", error));

