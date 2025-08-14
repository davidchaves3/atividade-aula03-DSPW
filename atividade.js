// 1. Importando o array de livros da nossa "base de dados"
const livros = require('./biblioteca');

// ------------------------------------------------------------------------
// ATIVIDADE 1: Encontrar livros de um gênero específico
//
// Crie uma função (modelo tradicional) que aceite um gênero como parâmetro
// e retorne um novo array com todos os livros desse gênero.
// ------------------------------------------------------------------------

function encontrarLivrosPorGenero(genero) {
    return livros.filter(function(livro) {return livro.genero === genero});
}

// Teste da Atividade 1
console.log('--- Atividade 1: Livros de Ficção Científica (Função Tradicional) ---');

 const livrosDeFiccao = encontrarLivrosPorGenero('Ficção Científica');
 console.log(livrosDeFiccao);
// ------------------------------------------------------------------------
// ATIVIDADE 2: Refatorando com Arrow Function
//
// Faça a mesma função da Atividade 1, mas agora usando Arrow Function.
// ------------------------------------------------------------------------


function encontrarLivrosPorGeneroArrow(genero){
  const livrosFiltrados = livros.filter(livro => livro.genero === genero);
  return livrosFiltrados;
}


// Teste da Atividade 2
console.log('\n--- Atividade 2: Livros de Distopia (Arrow Function) ---');
const livrosDeDistopia = encontrarLivrosPorGeneroArrow('Distopia');
console.log(livrosDeDistopia);


// ------------------------------------------------------------------------
// ATIVIDADE 3: Criar uma lista de títulos
//
// Crie uma função que retorne um novo array contendo apenas os títulos
// de todos os livros da biblioteca.
// ------------------------------------------------------------------------

const obterApenasTitulos = () => {
  return livros.map(livro => livro.titulo);
};

// Teste da Atividade 3
console.log('\n--- Atividade 3: Lista de todos os títulos ---');
const todosOsTitulos = obterApenasTitulos();
console.log(todosOsTitulos);


// ------------------------------------------------------------------------
// ATIVIDADE 4 (DESAFIO): Livros de autores específicos publicados após um certo ano
//
// Crie uma função que aceite o nome de um autor e um ano como parâmetros.
// A função deve retornar um array com os livros desse autor publicados
// DEPOIS do ano especificado.
// Dica: você precisará encadear (usar um após o outro) os métodos filter.
// ------------------------------------------------------------------------


const livrosDeAutorAposAno = (autor, ano) => {
  return livros.filter(livro => livro.autor === autor && livro.anoPublicacao > ano);
};


// Teste da Atividade 4
console.log('\n--- Atividade 4: Livros de J.R.R. Tolkien publicados após 1950 ---');
const livrosTolkienPos1950 = livrosDeAutorAposAno('J.R.R. Tolkien', 1950);
console.log(livrosTolkienPos1950);



// ------------------------------------------------------------------------
// ATIVIDADE 5: Criando Cartões de Apresentação com Desestruturação
//
// O objetivo agora é criar uma função que gere "cartões" de apresentação
// para os livros. Cada cartão será uma string com o formato:
// "Título: [TÍTULO] | Autor: [AUTOR] | Ano: [ANO DE PUBLICAÇÃO]"
//
// Para tornar o código mais limpo, você deve usar a DESESTRUTURAÇÃO
// para extrair as propriedades 'titulo', 'autor' e 'anoPublicacao'
// de cada objeto livro diretamente no parâmetro da função do .map().
// ------------------------------------------------------------------------




// Sua vez
  
// Teste da Atividade 5
console.log('\n--- Atividade 5: Cartões de Apresentação dos Livros ---');
// const cartoes = criarCartoesDeLivros();
// console.log(cartoes);