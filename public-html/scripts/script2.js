// 4.	Usa .then para obtener altura y peso de Pikachu
console.log("Ejercicio 2 (5.)\n\"Altura y peso de Pikachu\"");

fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(response => response.json())
    .then(data => {
        // Se imprimen los datos
        console.log("Pokemon:", data.name);
        console.log("Altura:", data.height);
        console.log("Peso:", data.weight);
    })
    .catch(err => console.error("Error:", err));

