// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

// string com várias linhas usando ( ` ).
let menu = `
--------------------
        MENU
--------------------
[ 1 ] - Opção 1
[ 2 ] - Opção 2
[ 3 ] - Opção 3
`;
console.log(menu);

let option = parseInt(prompt('Digite um opção: '));
switch (option) {
  case 1: console.log('\n-> Voce escolheu 1');
    break;
  case 2: console.log('\n-> Voce escolheu 2');
    break;
  case 3: console.log('\n-> Voce escolheu 3'); 
    break;
  default: console.log('\nOpção inválida');
}