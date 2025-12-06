// 13.	Crear un html que pida por input un Pokémon y muestre sus stats: hp, attack, defense, speed, special-attack, special-defense
// Muestra cada estadística en una lista o tabla
// Tips: Los stats vienen en data.stats[i].stat.name y en data.stats[i].base_stat
console.log("Ejercicio 11 (13.)\n\"Stats de pokemon con inptu\"");

const recibido = document.getElementById("btn-ej11");

recibido.addEventListener("click", (e) => {

    e.preventDefault(); // Para que no recargue la página

    // Se obtienen los datos del input
    const datos = document.getElementById("pokemon2");
    const contenido = datos.value.trim().toLowerCase();

    // Verifica si está o no vacío
    if (contenido === "") {
        alert("ESCRIBA UN NOMBRE");
    } else {
        // Se crean las etiquetas html
        let ul = document.createElement("ul");
        let p = document.createElement("p");
        p.textContent = "Estadísticas de " + contenido + ":";
        
        // Arrayas para almacenar los stats y sus nombres
        let arrayStatsNombres = []; // "attack", "defense", "speed", "special", "special-attack", "special-defense"
        let arrayStats = [];

        // Función async/await para obtener los stats del pokemon
        async function obtenerPokemon() {
            try {
                
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`);
                if (!response.ok) {
                    throw new Error("Error en la solicitud: " + response.status);
                }
                const data = await response.json();
                
                const arrayPokemones = data.results; // Se obtiene el array de los pokemones
                
                let encontrado; // Bandera para verificar si se ha encontrado el pokemon
                
                // Ciclo for-of para encontrar el pokemon según su nombre (name)
                for (const i of arrayPokemones) {
                    if (i.name === contenido) {
                        encontrado = true;
                        const pokemon = await fetch(i.url);
                        const dataPokemon = await pokemon.json();

                        // Ciclo for para almacenar los arrays
                        for (let i = 0; i < dataPokemon.stats.length; i++) {
                            arrayStatsNombres[i] = dataPokemon.stats[i].stat.name;
                            arrayStats[i] = dataPokemon.stats[i].base_stat;
                        }
                        
                        break; // Se cierra para no seguir buscando
                    } else {
                        encontrado = false; // Si no encuentra la bandera es false
                    }
                }
            
                if (!encontrado) {
                    throw new Error("Pokemon no encontrado."); // Error personalizado por si no se encuentra el error
                } else {
                    // Impresión de los datos en consola y DOM
                    console.log("Nombre: " + contenido + "\nEstadísticas:");
                    document.querySelector("#fld-ej11").appendChild(p);
                    for (let i = 0; i < arrayStats.length; i++) {
                        // Imprime en consola
                        console.log(" - " + arrayStatsNombres[i] + " => " + arrayStats[i]);
    
                        // Etiquetas para el html
                        let li = document.createElement("li");
                        li.textContent = arrayStatsNombres[i] + " => " + arrayStats[i];
    
                        ul.appendChild(li);
                    }
    
                    document.querySelector("#fld-ej11").appendChild(ul);
    
                    datos.value = ""; // Se vacía el input para volver a escribir
                }
            
            } catch (error) {
                console.error("ERROR: " + error);
            }
        }
        obtenerPokemon();
    }

});
