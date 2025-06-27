// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// Fibonacci -> uma série numérica onde cada número é a soma dos dois números anteriores. 
// Os dois primeiros números são geralmente 0 e 1.

let previous = 0;
let current = 1;
let next;

let sequence = '';

console.log(
  '=-'.repeat(20) + '\nSequência de Fibonacci (10 primeiros)\n' + 
  '=-'.repeat(20) + '\n'
);

for (let count = 1; count <= 10; count++) {
  sequence += previous;
  
  if (count < 10) {
    sequence += ', ';
  }

  next = previous + current;
  previous = current;
  current = next;
}
console.log('-> ' + sequence) 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
