// 7.	Listar los primeros 20 Pokémon. Usar https://pokeapi.co/api/v2/pokemon?limit=20
console.log("Ejercicio 5 (7.)\n\"Enlistar pokemones\"");

fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => { // results es el array de los pokemones
            console.log(element);
        });
    })
    .catch(error => console.error("Error:",error));


