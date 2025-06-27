// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// O fatorial de um número natural n, representado por n!, é o produto de todos os 
// números inteiros positivos de 1 até n.

const prompt = require('prompt-sync')();

console.log('!Fatorial\n' + '*'.repeat(10));

let factorial = parseInt(prompt('Digite um número: '));
let result = 1;
let product = '';

for (let count = factorial; count >= 1; count--) {
  result *= count;
  product += count;

  if (count > 1) {
    product += ' x ';
  } 
}

if (factorial !== 0) {
  console.log('\n' + factorial + '! = ' + product + ' = ' + result);
} else {
  console.log('\n' + factorial + '! = ' + result);
}
