// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let number = 1; // qualquer valor diferente de 0 para entrar no while
let sum = 0;
let count = 0;

console.log(
  '+='.repeat(10) + '\nMédia Aritmética\n' + 
  '+='.repeat(10) + '\n'
);

while (number !== 0) {
  number = parseFloat(prompt('Digite um número decimal (0 pra sair): '));
  
  if (number !== 0) {
    sum += number;
    count += 1;
  }
}
if (count > 0) {
  let arithmeticMean = sum / count;
  
  console.log('\nSoma: ' + sum);
  console.log('Média Aritmética: ' + arithmeticMean.toFixed(2));
}
