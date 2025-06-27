// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();
let boughtApples = parseFloat(prompt('Maçãs compradas: '));

if (boughtApples > 0) {
  let applePrice;

  if (boughtApples < 12) {
    applePrice = 0.30;
  } else {
    applePrice = 0.25;
  }
  let total = boughtApples * applePrice;

  console.log('Unidade: R$ ' + applePrice.toFixed(2))
  console.log('-'.repeat(20) + '\nValor total: R$ ' + total.toFixed(2));
} else {
  console.log('Valor inválido')
}

// toFixed(2) -> arredonda o número para o número especificado de casas decimais 
// (neste caso, duas) e retorna o resultado como uma string. 
