// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();
let score = parseFloat(prompt('Nota do Exame Final (0-10): '));

if (score >= 0 && score <= 10) {
  let situation = '';

  if (score >= 7) {
    situation = 'Aprovado';
  } else if (score >= 5) {
    situation = 'Recuperação';
  } else if (score < 5) {
    situation = 'Reprovado';
  }
  console.log(
    '\n' + '=-='.repeat(9) + '\nSituação: ' + situation + 
    '\n' + '=-='.repeat(9)
  );
} else {
  console.log('Valor Inválido');
}
