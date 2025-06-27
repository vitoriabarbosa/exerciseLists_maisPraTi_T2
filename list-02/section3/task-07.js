// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Meia", preco: 10 },
  { nome: "Calça", preco: 120 }
];

console.log(
  '='.repeat(20) + '\nProdutos Ordenados\n' + 
  '='.repeat(20) + '\n\n[ o ] Menor Preço\n'
);

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

console.log(nomesOrdenadosPorPreco(produtos));
// [ 'Meia', 'Camiseta', 'Calça', 'Tênis' ]
