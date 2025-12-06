// 11.	Crear un programa donde el usuario escriba el nombre o ID de un Pokémon en un input, y el sistema muestre: 
// Nombre, imagen, tipos (fire, water, grass, electric, etc.)
// Ejemplo: Charizard → tipos: fire, flying
// Tips:
// -	Los tipos vienen en data.types[0].type.name
// -	Un Pokémon puede tener 1 o 2 tipos → mostrar ambos
console.log("Ejercicio 9 (11.)\n\"Inputs y API\"");

let recibido = document.getElementById("btn-ej9");

recibido.addEventListener("click", (e) => {

    e.preventDefault();

    const datos = document.getElementById("pokemon");
    const contenido = datos.value.trim().toLowerCase(); // Quita los espacios en blanco de los extremos y transforma a minuscula

    // console.log(contenido);
    // console.log(isNaN(contenido));
    let nombre, id, tipos = [], tiposTipeado = ""; // Se declaran variables para almacenar datos
    async function obtenerPokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`); // fetch para acceder directamente al api de pokemon. (Se pone limit=100000 para asegurar que se encontrará uno incluso a futuro.)
            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }
            const data = await response.json();

            const arrayPokemones = data.results; // Se obtiene el array de los pokemones

            // Condicional que verfica si es id o nombre
            if (!isNaN(contenido)) {

                nombre = arrayPokemones[contenido - 1].name;
                // Se usa otro fetch para acceder a la información del pokemon
                const pokemon = await fetch(arrayPokemones[contenido - 1].url);
                const data = await pokemon.json();

                // Con la data del pokemon se obtiene el id y los tipos
                id = data.id;
                tipos = data.types;

                // Se tipean los tipos
                for (const i of tipos) {
                    tiposTipeado += "\"" + i.type.name + "\" ";
                }
                
            } else {
                for (let i = 0; i < arrayPokemones.length; i++) {
                    // Condicional para buscar el nombre entre todos los elementos dle array
                    if (arrayPokemones[i].name === contenido) {
                        nombre = arrayPokemones[i].name;

                        const pokemon = await fetch(arrayPokemones[i].url);
                        const data = await pokemon.json();
                        
                        id = data.id;
                        tipos = data.types;
                        for (const i of tipos) {
                            tiposTipeado += "\"" + i.type.name + "\" ";
                        }

                        break; // Se cierra para evitar buscar más
                    }
                    
                }
                
            }
            // Condicional para verificar que se ha encontrado el pokemon. Si los datos son undefined o vacíos (solo en tiposTipeado) genera un error personalizado
            if (nombre === undefined && id === undefined && tiposTipeado === "") {
                throw new Error("Error al buscar pokemon.");
            } else {
                console.log("Nombre:", nombre + "\nID:", id + "\nTipos:", tiposTipeado);
            }

            datos.value = ""; // Se borra el texto del input para ingresar nuevamente

        } catch (error) {
            console.error(error);
        }

    }

    obtenerPokemon();

});
