# ⚙️ Lista 02 – Estruturas de Controle, Funções e Manipulação de Dados

Esta lista faz parte do curso **Full Stack Jr da +prati**, com foco em práticas mais avançadas de lógica de programação em **JavaScript**. Aqui exploramos validações, loops com controle mais elaborado, funções puras, recursividade e operações com arrays/objetos.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/download)
- JavaScript (ES6+)
- prompt-sync (para entrada de dados no terminal)

---

## 📚 Exercícios Resolvidos – Lista 2

### Estruturas de Controle Avançadas

| Nº  | Exercício            | Descrição                                                                                       |
|-----|----------------------|-------------------------------------------------------------------------------------------------|
| 1   | Validação de Datas   | Função `ehDataValida(dia, mes, ano)` que retorna `true` para datas reais e `false` para inválidas (ano bissexto) |
| 2   | Jogo de Adivinhação  | Número aleatório de 1 a 100; usuário tenta adivinhar com dicas de “mais alto” ou “mais baixo” e contador de tentativas |
| 3   | Palavras Únicas      | Extrair todas as palavras únicas de uma string usando `if/else` e `for`                         |

---

### Funções e Recursão

| Nº  | Exercício            | Descrição                                                                                       |
|-----|----------------------|-------------------------------------------------------------------------------------------------|
| 4   | Fatorial Recursivo   | Função `fatorial(n)` recursiva; lança `Error` se `n < 0`; retorna 1 se `n === 0`                |
| 5   | Debounce             | Função `debounce(fn, delay)` que cria uma nova função que só executa `fn` se não for chamada novamente dentro do delay |
| 6   | Memoization          | Função `memoize(fn)` que armazena resultados em cache para chamadas repetidas com os mesmos argumentos |

---

### Arrays e Objetos Complexos

| Nº  | Exercício                | Descrição                                                                                       |
|-----|--------------------------|-------------------------------------------------------------------------------------------------|
| 7   | Mapeamento e Ordenação   | Dado um array de produtos `{ nome, preco }`, retorna um array só com os nomes ordenados por preço crescente |
| 8   | Agrupamento por Cliente  | Soma dos totais de vendas por cliente usando `reduce` para gerar objeto `{ cliente: soma }`     |
| 9   | Conversão Entre Formatos | Funções `paresParaObjeto(pares)` e `objetoParaPares(obj)` para converter entre arrays de pares e objetos |


---

## 🚀 Como Executar

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/vitoriabarbosa/exerciseList_maisPraTi_T2.git
    ```

2. **Acesse a pasta do projeto:**
    ```bash
    cd exerciseList_maisPraTi_T2/list-02
    ```

3. **Execute qualquer arquivo com Node.js:**
    ```bash
    node section1/task-01.js
    ```

    > Obs.: Algumas entradas de dados são feitas via terminal, utilizando `prompt-sync`.

---

## 👩‍💻 Autora

**Vitória Barbosa**  
Estudante de Engenharia de Software  
[GitHub](https://github.com/vitoriabarbosa) | [LinkedIn](https://linkedin.com/in/vitoriabarbosaa)

