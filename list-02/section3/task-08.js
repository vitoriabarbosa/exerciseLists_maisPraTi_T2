// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Cliente1", total: 100 },
  { cliente: "Cliente2", total: 50 },
  { cliente: "Cliente1", total: 150 },
  { cliente: "Cliente3", total: 200 }
];

console.log(
  '-'.repeat(25) + '\nClientes Cadastrados\n' + 
  '-'.repeat(25) + '\n'
);

function vendasPorCliente(vendas) {
  return vendas.reduce((acc, venda) => { // acc === accumulator
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

console.log(vendasPorCliente(vendas));
// { Cliente1: 250, Cliente2: 50, Cliente3: 200 }
