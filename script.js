let currentPokemon;
let offset = 0;
let limit = 30;


async function loadPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    pokeAll = pokeJson['results'];
    console.log('loaded Pokemon', currentPokemon);

    for (i = 0; i < pokeAll.length; i++)

        renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['front_shiny'];
}
