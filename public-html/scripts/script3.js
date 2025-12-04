// 5.	Usa async/await para obtener altura y peso de Pikachu
console.log("Ejercicio 3 (5.)\n\"Altura y peso de Pikachu (async/await)\"");

async function pesoAlturaPikachu() {
    console.log("'Pikachu'");
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`); // Se llama al fetch con await

    const data = await response.json(); // Se convierte a json
    
    // Se imprimen datos
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
}

pesoAlturaPikachu();