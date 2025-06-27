// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer); // limpa o 'cronômetro'
    timer = setTimeout(fn, delay); // agenda o novo timer
  };
}

console.log(
  '-'.repeat(12) + '\nDebounce\n' + 
  '-'.repeat(12) + '\n'
);

const test = () => console.log("Hello world!");
const testDebounced = debounce(test, 1000);

// simula várias chamadas seguidas:
testDebounced();
testDebounced();
testDebounced(); // apenas essa será executada após 1 segundo


// A função debounce impede que fn seja chamada várias vezes 
// seguidas rapidamente. Ela espera o tempo acabar sem nova chamada 
// para então executar.