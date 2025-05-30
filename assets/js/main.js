const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch por padrao é uma requisição GET
fetch(url) //interface de uma prommise
    .then(function(response){ //se funcionar recebe a resposta
        console.log(response);
    })
    .catch(function(error){
        console.error('Erro ao buscar os dados:', error); //se der erro, exibe o erro
    })
    .finally(function(){
        console.log('Requisição finalizada'); //indica que a requisição foi finalizada idependentemente do sucesso ou falha
    })

// https://pokeapi.co/api/v2/pokemon?offset=0&limit=10