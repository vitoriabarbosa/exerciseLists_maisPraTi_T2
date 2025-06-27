// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')();
let multiplicationTable = parseInt(prompt('Tabuada do número: '))

console.log('\n' + '-'.repeat(17));

for (let count = 0; count <= 10; count++) {
  let result = count * multiplicationTable;

  console.log(
    '| ' + count.toString().padStart(2) + ' x ' + 
    multiplicationTable.toString().padStart(2) + ' = ' + 
    result.toString().padStart(3) + ' |'
  );
}
console.log('-'.repeat(17));

// O método .toString() converte um número em string. Ele é usado antes do .padStart()
// porque só strings têm o método padStart().

// .padStart(?) para alinhar os elementos com espaçamentos à esquerda.