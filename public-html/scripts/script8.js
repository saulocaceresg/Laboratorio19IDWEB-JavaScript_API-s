// 10.	Crear un html que, al cargar, obtenga los Pokémon del 1 al 10 y muestre:
// Nombre, imagen e ID 
// Cada Pokémon debe aparecer en una tarjeta (div) distinta. 
// Tips: 
// -	Usa un for para pedir varios Pokémon
// -	Usa data.sprites.front_default para las imágenes 
// Almacena todos los resultados en una lista y muéstralos en el HTML
console.log("Ejercicio 8 (10.)\n\"Cargando un pokemon en otro html\"");

async function cargarPokemon() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);

        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
        }
        const data = await response.json();

        let ul = document.createElement("ul");

        for (let i = 0; i < 10; i++) {

            let li = document.createElement("li");

            const url = data.results[i].url; // se pide la  url para tener un acceso directo a los atributos de cada pokemon
            const urlAcceso = await fetch(url);
            const pokemon = await urlAcceso.json();
            
            // const id = partes[partes.length - 2];
            console.log("Nombre: " + pokemon.name + "\nID: " + pokemon.id);
            
            let div = document.createElement("div");
            div.setAttribute("data-id", (i + 1));
            
            let img = document.createElement("img");
            let imagen = pokemon.sprites.front_default;
            img.setAttribute("src", imagen);

            let pDatos = document.createElement("p");
            pDatos.textContent = pokemon.name + " | " + pokemon.id;

            // let pID = document.createElement("p")
            // pID.textContent = ;

            // div.appendChild(pNombre);
            div.appendChild(img);
            div.appendChild(pDatos);
            
            li.appendChild(div);
            ul.appendChild(li);

        }
        document.querySelector("#ej8").after(ul);
        console.log("Cargado...");
    } catch (error) {
        console.error("Error: " + error);
    }
}


cargarPokemon();