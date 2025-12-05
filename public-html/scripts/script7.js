// 9.	Buscador visual con HTML + JS. Ingresar el ID de un Pokémon y mostrar sus datos principales en el html (imagen, el nombre, ID, peso, altura y habilidades)
console.log("Ejercicio 7 (9.)\n\"Buscador visual con HTML y JS\"");

let id = parseInt(prompt("Ingrese un ID:"));

// Función async/await
async function mostrarPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await response.json();

    console.log("Nombre: " + data.name + "\nID: " + data.id + "\nPeso: " + data.id + "\nAltura: " + data.height + "\nHabilidades: ", data.abilities);

    // Creación de etiquetas HTML para insertar en el documento
    let div = document.createElement("div");
    div.setAttribute("id", "div-ej7");

    let p = document.createElement("pre");
    p.style.fontFamily = "Times";
    p.textContent = `Nombre: ${data.name}\nID: ${data.id}\nPeso: ${data.id}\nAltura: ${data.height}`;

    let pLista = document.createElement("p");
    pLista.textContent = "Habilidades:";

    let ul = document.createElement("ul");
    let arrayAbilities = data.abilities;
    for (let i = 0; i < arrayAbilities.length; i++) {
        let li = document.createElement("li");
        li.textContent = arrayAbilities[i].ability.name;

        ul.appendChild(li);
    }

    let img = document.createElement("img");
    img.setAttribute("src", data.sprites.front_default);

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(pLista);
    div.appendChild(ul);


    document.querySelector("#ej7").after(div);
}

mostrarPokemon();
