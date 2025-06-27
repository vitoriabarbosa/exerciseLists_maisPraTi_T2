// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();
let age = prompt('Digite sua idade: ');

if (age >= 0 && age <= 115) {
  let answer = '';

  if (age <= 10) {
    answer = 'Criança';
  } else if (age <= 17) {
    answer = 'Adolescente';
  } else if (age <= 59) {
    answer = 'Adulto';
  } else {
    answer = 'Idoso';
  }
  console.log(
    '\n' + '-'.repeat(25) + '\nCategoria: ' + answer + 
    '\n' + '-'.repeat(25)
  );
} else {
  console.log('Idade Inválida')
}
  