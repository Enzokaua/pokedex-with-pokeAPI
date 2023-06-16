const buscaPokemon = ()=>{
    //URL DA API, TENDO COMO PARAMETRO DE ENTRADA UM ID, QUE SERIA O VALOR FINAL DA URL EM QUESTAO
    const getPokeurl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    //CRIACAO DE UM ARRAY PARA ARMAZENAMENTO DAS PROMISSES RETORNADAS
    const arrayPoke = [];
    //FOREACH RESPONSAVEL POR PERCORRER TODOS OS POKEMONS DA API
    for(let i = 1; i <=920; i++){
        //PEGA OS VALORES DENTRO DO ARRAY CRIADO, ATRIBUI UM FETCH, DIZENDO QUE TODO O ATRIBUTO DE ENTRADA DELE, VAI SER
        //O I DO FOREACH ACIMA, E TRANSFORMA ISSO EM UMA RESPONSTA JSON, PARA QUE POSSA SER LIDO DEPOIS
        arrayPoke.push(fetch(getPokeurl(i)).then(response => response.json()))
    }
    //FUNCAO PROMISSE PARA PEGAR TODAS AS INFORMAÇOES DO ARRAY CRIADO
    Promise.all(arrayPoke)
    //DEPOIS DE PEGADO TODAS AS INFORMACOES, FAÇA UM CONSTRUTOR QUE RECEBA OS SEGUINTES PARAMETROS
        .then(pokemons => {
        //FUNCAO REDUCE ATRIBUIDA A PROMISSE CRIADA, ACUMULAMOS ISSO E CRIAMOS UM OBJETO POKEMON QUE RECEBERA OS VALORES    
        const listagemPokemon = pokemons.reduce((accumulator, pokemon) => {
            //ACESSANDO UM ARRAY DENTRO DE OUTRO ARRAY DENTRO DA API
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            //ATRIBUA A PRIMEIRA FUNCAO DE ACUMULACAO DA API, O SEGUINTE CORPO HTML
            accumulator += `<li class="card ${types[0]}" id="list" onclick="navegar(${pokemon.id})">
            <img class="card-image" alt="${pokemon.name}" src="https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle"> ${types.join(' | ')}</p>
            </li>`
            //RETORNE A AGREGACAO CRIADA PARA O PRÓPRIO ACUMULATOR
            return accumulator
        }, '') //O VALOR VAZIO SERIA O OBJETO POKEMON CRIADO, ESTANDO VAZIO ATUALMENTE E SENDO POPULADO PELO ACUMULATOR
        //CRIACAO DE UMA CONSTANTE QUE PEGA O ID CRIADO E ATRIBUIDO AO HTML
        const ul = document.querySelector('[data-js = "pokedex"]')
        //INSERINDO AS ALTERACOES DENTRO DO ARQUIVO HTML
        ul.innerHTML = listagemPokemon
        console.log(pokemons)
        })
}
//CHAMA A FUNCAO CRIADA ANTERIORMENTE
buscaPokemon();

function navegar(id) {
    localStorage.setItem('pokemonId', id);
    window.location.href = '/status.html';
  }