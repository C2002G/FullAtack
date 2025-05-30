const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch por padrao é uma requisição GET
fetch(url) //interface de uma prommise
    .then((response) => response.json())//se funcionar recebe a resposta
    .then((jsonBody) => console.log(jsonBody)) //converte a resposta para json e exibe no console
    .catch((error) => console.error('Erro ao buscar os dados:', error)) //se der erro, exibe o erro


// https://pokeapi.co/api/v2/pokemon?offset=0&limit=10