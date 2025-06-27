// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const secretNumber = Math.floor(Math.random() * 100) + 1;
let shot;
let totalShots = 0;

console.log(
  '+-'.repeat(15) + '\nJogo da Adivinhação\n' + 
  '+-'.repeat(15) + '\n' + '\nTente adivinhar o número de 1 a 100!\n'
);

while (shot !== secretNumber) {
  shot = parseInt(prompt('Digite seu palpite: '));
  totalShots++;

  if (shot < secretNumber) {
    console.log('Mais alto!');
  } else if (shot > secretNumber) {
    console.log('Mais baixo!');
  } else if (shot === secretNumber) {
    console.log(
      '\n' + '=='.repeat(25) + '\n' +
      'Parabéns! Você acertou em ' + totalShots + ' tentativa(s)!'
    );
  } else {
    console.log('Ops, digite um número válido!');
  }
}
