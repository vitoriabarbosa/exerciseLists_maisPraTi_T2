// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

// calcula uma vez, guarda, e depois reutiliza -> cache em memória
function memoize(fn) {
  const cache = {};

  return function(a, b) {
    const key = a + "," + b; // cria uma "chave" para identificar esse cálculo
    if (cache[key]) {
      return cache[key]; // após o cálculo, retorna o resultado guardado
    }

    const result = fn(a, b); // se não, calcula
    cache[key] = result;   // guarda o resultado
    return result;
  };
}

function slowSum(a, b) {
  console.log('Calculando...\n');
  return a + b;
}

console.log(
  '~'.repeat(15) + '\nMemoization\n' + 
  '~'.repeat(15) + '\n'
);

const fastSum = memoize(slowSum);
console.log('Cálculo guardado: ' + fastSum(2, 3));
console.log('Retornando o cache: ' + fastSum(2, 3));
