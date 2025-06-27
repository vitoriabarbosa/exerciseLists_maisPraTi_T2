// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let value1 = parseInt(prompt('Valor 1: '));
let value2 = parseInt(prompt('Valor 2: '));

if (value1 !== value2) {
  let values = [value1, value2];
  values.sort((a, b) => a - b);

  console.log('\nOrdem crescente:');
  console.log(values);
} else {
  console.log('Ops, os valores não podem ser iguais!');
}
