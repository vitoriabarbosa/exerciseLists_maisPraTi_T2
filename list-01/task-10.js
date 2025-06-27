// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();
let number = parseInt(prompt('Digite um número inteiro: '));

for (let count = 0; count < 10; count++) {
  console.log(number);
}