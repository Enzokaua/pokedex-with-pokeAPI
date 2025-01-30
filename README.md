# Pokedex com a PokeAPI

## 📝 Descrição

Este projeto consiste em uma Pokédex que consome a [PokeAPI](https://pokeapi.co/) para exibir informações sobre diferentes Pokémon. A interface foi projetada para ser totalmente responsiva, garantindo uma boa experiência do usuário em dispositivos de diversos tamanhos. O objetivo principal do projeto é explorar a integração com APIs REST e boas práticas de design responsivo.

## ✨ Funcionalidades

- Exibição de informações detalhadas sobre Pokémon, como nome, imagem, habilidades e tipos.
- Navegação entre Pokémon por meio de botões ou barra de busca.
- Interface totalmente responsiva, adaptando-se a dispositivos móveis, tablets e desktops.
- Feedback visual enquanto os dados são carregados.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização e design responsivo com flexbox e media queries.
- **JavaScript**: Lógica de consumo da API e manipulação dinâmica do DOM.
- **Fetch API**: Para realizar requisições HTTP e obter os dados da PokeAPI.

## 🎨 Estrutura do Projeto

A estrutura principal do projeto é composta por três arquivos básicos:

- **index.html**: Contém o layout principal da aplicação.
- **style.css**: Define o estilo e responsividade.
- **script.js**: Implementa a lógica de consumo da PokeAPI e interação com o usuário.

## 📚 Como Funciona

1. **Consumo da API**:  
   O projeto utiliza a Fetch API para buscar informações diretamente da PokeAPI. As requisições são feitas para endpoints específicos, como:
   - `https://pokeapi.co/api/v2/pokemon/{id}`: Para buscar detalhes de um Pokémon com base no ID ou nome.

2. **Manipulação do DOM**:  
   Os dados retornados da API são exibidos dinamicamente na página usando JavaScript. As informações incluem:
   - Nome do Pokémon;
   - Imagem oficial;
   - Tipos;
   - Habilidades.

3. **Design Responsivo**:  
   O layout foi projetado utilizando CSS com flexbox e media queries para garantir que funcione bem em telas pequenas e grandes.

## 💻 Configuração e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/enzokaua/pokedex-with-pokeAPI.git
