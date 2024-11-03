/**
 * JavaScript:
La función fetchPokemon() toma el valor del input,
 lo convierte a minúsculas (para asegurar compatibilidad con la API) y 
 lo usa en la URL de la API.
Si el campo está vacío, muestra un mensaje de alerta para que el usuario ingrese un nombre.
Si el Pokémon no es encontrado, el bloque catch muestra un mensaje de error en la interfaz.
displayPokemon(): Esta función muestra los detalles del Pokémon en el div pokemon-info como antes.
Cómo Usarlo
Guarda el código en sus respectivos archivos (index.html, styles.css, script.js).
Abre index.html en tu navegador.
Escribe el nombre de un Pokémon en el campo y haz clic en "Buscar".
 * 
 * 
 * 
 * 
 */

function fetchPokemon() {
  const pokemonName = document
    .getElementById("pokemon-name")
    .value.toLowerCase(); // Convertir el nombre a minúsculas
  if (pokemonName === "") {
    alert("Por favor, ingresa el nombre de un Pokémon.");
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return response.json();
    })
    .then((data) => displayPokemon(data))
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById(
        "pokemon-info"
      ).innerHTML = `<p style="color: red;">Pokémon no encontrado</p>`;
    });
}

function displayPokemon(pokemon) {
  const pokemonInfo = document.getElementById("pokemon-info");
  pokemonInfo.innerHTML = `
        <p><strong>Nombre:</strong> ${pokemon.name}</p>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
}
