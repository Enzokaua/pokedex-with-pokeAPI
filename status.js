function getPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
        const container = document.getElementById("container")
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        const moves = pokemon.moves.map(moveInfo => moveInfo.move.name)

        container.innerHTML = 
            `<div class="statusContainer">
            <div class="left ${types[0]}">
                <div class="imagePoke"><img src="https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif" alt=""></div>
                <div class="embaixoImagem">
                <div class="imagePokeball"><img src="./assets/pokeball.png" alt=""></div>
                <div class="idPoke">${pokemon.id}</div>
            </div>
                <div class="namePoke"><p>${pokemon.name}</p></div>
                <div class="descPoke"><p>${types[0]} pokemon</p></div>
                <div class="atributes">
                    <div class="height"><h4>Height</h4><p>${pokemon.height}.0</p></div>
                    <div class="type"><h4>Type</h4><p>${types.join(' | ')}</p></div>
                    <div class="weight"><h4>Weight</h4><p>${pokemon.weight}.0</p></div>
                </div>
            </div>
    
            <div class="right ${types[0]}">
                <div class="description">
                    <h2>Moves for ${pokemon.name}</h2>
                    <p class="scrollable-div">${moves.join(', ')}</p>
                </div>
                <div class="evolutionTitle">
                    <h2>Shiny Version</h2>
                </div>
                <div class="evolution">
                    <div class="poke1"><img src="${pokemon.sprites.front_shiny}" alt=""></div>
                    <div class="poke2"><img src="${pokemon.sprites.back_shiny}" alt=""></div>
                </div>
            </div>
        </div>
    </div>`;
    })
    
}   
const pokemonId = localStorage.getItem('pokemonId');
if (pokemonId) {
  getPokemon(pokemonId);
}
