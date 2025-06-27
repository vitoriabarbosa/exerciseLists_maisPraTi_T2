// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();
let number;
let sum = 0;

console.log(
  '+='.repeat(10) + '\nSomando 5 números\n' + 
  '+='.repeat(10) + '\n'
);

for (let count = 0; count < 5; count++) {
  number = parseInt(prompt('Digite um número: '));
  sum += number;
}
console.log('\nA soma dos números é ' + sum);