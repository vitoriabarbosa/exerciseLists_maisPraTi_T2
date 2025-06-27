// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

console.log(
  '='.repeat(20) + '\nValidando datas\n' + 
  '='.repeat(20) + '\n'
);

// -----------------
// Usando o Date()
// -----------------
function dateValidator(day, month, year) {
  // em js os meses são de 0 (janeiro) a 11 (dezembro), então colocamos -1
  const date = new Date(year, month - 1, day);
  
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

console.log(dateValidator(29, 2, 2024)); // true
console.log(dateValidator(31, 4, 2023)); // false
console.log(dateValidator(30, 6, 2023)); // true
console.log(dateValidator(0, 12, 2023)); // false


console.log('-'.repeat(20))

// -----------------
// Usando a lógica
// -----------------

// ANO BISSEXTO -> se o ano não for um ano centenário (ou seja, não termina 
// em "00"), ele é bissexto se for divisível por 4. Se o ano for um ano 
// centenário, ele é bissexto se for divisível por 400. 

// Fevereiro tem 28 dias na maioria dos anos, mas em anos bissextos, que 
// ocorrem a cada quatro anos, ele tem 29 dias

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dateValidator(day, month, year) {
  if (year < 1 || month < 1 || month > 12 || day < 1) {
    return false;
  } 

  let daysInTheMonth;

  switch (month) {
    case 2: // fevereiro
      daysInTheMonth = leapYear(year) ? 29 : 28;
      break;
    case 4: case 6: case 9: case 11:
      daysInTheMonth = 30;
      break;
    default:
      daysInTheMonth = 31;
  }

  return day <= daysInTheMonth;
}

console.log(dateValidator(29, 2, 2024)); // true
console.log(dateValidator(31, 4, 2023)); // false
console.log(dateValidator(30, 6, 2023)); // true
console.log(dateValidator(0, 12, 2023)); // false
