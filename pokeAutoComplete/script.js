let pokemonList = [];

// Obtener la lista de nombres de Pokémon al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(response => response.json())
        .then(data => {
            pokemonList = data.results.map(pokemon => pokemon.name);
        })
        .catch(error => console.error('Error al cargar la lista de Pokémon:', error));
});

function fetchPokemon() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    if (pokemonName === "") {
        alert("Por favor, ingresa el nombre de un Pokémon.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return response.json();
        })
        .then(data => displayPokemon(data))
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('pokemon-info').innerHTML = `<p style="color: red;">Pokémon no encontrado</p>`;
        });
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

function showSuggestions() {
    const input = document.getElementById('pokemon-name').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (input.length === 0) return;

    const filteredPokemons = pokemonList.filter(pokemon => pokemon.startsWith(input));

    filteredPokemons.slice(0, 5).forEach(pokemon => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = pokemon;
        suggestionItem.onclick = () => selectSuggestion(pokemon);
        suggestions.appendChild(suggestionItem);
    });
}

function selectSuggestion(pokemon) {
    document.getElementById('pokemon-name').value = pokemon;
    document.getElementById('suggestions').innerHTML = '';
}
