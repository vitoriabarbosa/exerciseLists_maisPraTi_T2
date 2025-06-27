// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')();

console.log(
  '-'.repeat(20) + '\nFatorial Recursivo\n' + 
  '-'.repeat(20) + '\n'
);

let number = parseInt(prompt('Digite um número: '));

function factorial(n) {
  if (n < 0) {
    throw new Error("Opa, o número não pode ser negativo");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); // chamada recursiva
}

console.log('!' + number + ' = ' + factorial(number));
