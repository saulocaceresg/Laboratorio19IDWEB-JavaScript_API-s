// 6.	Muestra en consola la URL de sprites.front_default de Charizard
console.log("Ejercicio 4 (6.)\n\"front default de charizard (async/await)\"");

fetch(`https://pokeapi.co/api/v2/pokemon/charizard`)
    .then(response => response.json())
    .then(data => {
        console.log("front default:", data.sprites.front_default); // Se accede a la url
    })
    .catch(error => console.error("Error:", error));
