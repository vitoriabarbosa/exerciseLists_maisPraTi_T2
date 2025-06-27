// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// IMC = peso / (altura * altura)

const prompt = require('prompt-sync')();

console.log(
  '+-'.repeat(10) + '\nCalcule seu IMC\n' + 
  '+-'.repeat(10) + '\n'
);

let weight = parseFloat(prompt('Digite seu peso: '));
let height = parseFloat(prompt('Digite sua altura: '));

if (weight > 0 && height > 0) {
  let imc = weight / (height**2);
  let result = '';

  if (imc < 18.5) {
    result = 'Abaixo do peso';
  } else if (imc < 25) {
    result = 'Peso normal';
  } else if (imc < 30) {
    result = 'Sobrepeso';
  } else {
    result = 'Obesidade';
  }
  console.log('=+'.repeat(12) + '\n> Seu IMC é ' + imc.toFixed(1));
  console.log('Resultado: ' + result);
} else {
  console.log('Peso e altura devem ser maiores que zero');
}