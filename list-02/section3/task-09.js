// 9. Conversão Entre Formatos
// Escreva duas funções:
// 1. paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// 2. objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

console.log(
  '-'.repeat(25) + '\nConversão entre formatos\n' + 
  '-'.repeat(25)
);

// recebe um array de pares e retorna o objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}
console.log('\nRetorna Objetos:\n' + '-'.repeat(25));
console.log(paresParaObjeto([["a", 1], ["b", 2]]));
// { a: 1, b: 2 }

// recebe um objeto e retorna um array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}
console.log('\nRetorna um Array:\n' + '-'.repeat(25));
console.log(objetoParaPares({ a: 1, b: 2 }));
// [ ['a', 1], ['b', 2] ]
