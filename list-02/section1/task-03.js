// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const sentence = "olá olá mundo código mundo teste";
const words = sentence.split(" "); // separar as palavras
const singleWords = [];

console.log(
  '-'.repeat(20) + '\nPalavras únicas\n' + 
  '-'.repeat(20) + '\n'
);

// escolhe uma palavra para analisar
for (let i = 0; i < words.length; i++) {
  let count = 0;

  // compara a palavra escolhida com todas as outras
  for (let j = 0; j < words.length; j++) {
    if (words[i] === words[j]) {
      count++;
    }
  }

  if (count === 1) {
    singleWords.push(words[i]); // preenche a lista das palavras únicas
  }
}

console.log(singleWords);
