/**
 * avaScript:
La función fetchPokemon() realiza una solicitud a la API y,
 al obtener una respuesta exitosa, llama a displayPokemon() para mostrar
  los datos en la página.
displayPokemon() crea un bloque HTML con los detalles del Pokémon, 
incluyendo nombre, ID, altura, peso e imagen.

Cómo Usarlo
Guarda cada bloque de código en sus respectivos archivos
 (index.html, styles.css, script.js).
Abre index.html en tu navegador para ver y probar la página.
Cuando hagas clic en el botón "Obtener Datos de Ditto",
 el JavaScript llamará a la API y mostrará la información en el div pokemon-info.
 * 
 * 
 * 
 */



function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => console.error('Error:', error));
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
        <p><strong>Nombre:</strong> ${pokemon.name}</p>
        <p><strong>ID:</strong> ${pokemon.id}</p>
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
}
