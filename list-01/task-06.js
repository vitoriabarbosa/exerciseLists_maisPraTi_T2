// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B+C e B < A+C e C < A+B
// Triângulo isósceles: possui dois lados iguais (A=B, ou A=C, ou B=C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C)
// Triângulo equilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

let sideA = parseFloat(prompt('Valor do lado A: '));
let sideB = parseFloat(prompt('Valor do lado B: '));
let sideC = parseFloat(prompt('Valor do lado C: '));

if ( sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
  let shape = 'Triângulo';
  let triangleType = '';

  if (sideA === sideB && sideB === sideC) {
    triangleType = 'equilátero';
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    triangleType = 'isósceles';
  } else {
    triangleType = 'escaleno';
  }
  console.log('\n' + shape + ' do tipo ' + triangleType);
} else {
  console.log('\nForma Desconhecida');
}
