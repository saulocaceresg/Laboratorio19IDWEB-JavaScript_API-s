// 12.	Mostrar estadísticas base de un Pokémon
console.log("Ejercicio 10 (13.)\n\"Estadísticas base de un pokemon\"");

async function estadisticasPokemon() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/2`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
        }

        console.log("Nombre:", data.name);

        const stats = data.stats;
        console.log("Estadísticas:");
        for (const i of stats) {
            console.log("- " + i.stat.name);
        }

    } catch (error) {
        console.error("ERROR:", error);
    }
}

estadisticasPokemon();