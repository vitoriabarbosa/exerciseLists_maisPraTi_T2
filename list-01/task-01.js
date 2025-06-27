// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// npm install prompt-sync -> entrada do usuário
const prompt = require('prompt-sync')();

console.log(
  '+-'.repeat(10) + '\nPar ou Impar\n' + 
  '+-'.repeat(10) + '\n'
);

let number = parseInt(prompt('Digite um número: '));

if (number % 2 === 0) {
  console.log('-> ' + number + ' é um número par!');
} else {
  console.log('-> ' + number + ' é um número impar!');
}