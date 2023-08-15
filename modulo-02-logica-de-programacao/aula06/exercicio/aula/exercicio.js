/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto.
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

const { formatPrice } = require("../../../../actions/formatPriceThroughCents");

const somaImposto = ({ taxaImposto, custo }) => {
  if (!taxaImposto) return "Taxa de imposto inválida";
  if (!custo) return "Custo inválido";
  if (typeof taxaImposto !== "number") "Taxa de imposto deve ser um número";
  if (typeof custo !== "number") "Custo deve ser um número";

  const valorComImpostos = custo + custo * (taxaImposto / 100);
  return {
    custoInicial: formatPrice(custo * 100),
    valorComImpostos: formatPrice(valorComImpostos * 100),
  };
};

/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:

  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:

  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

const arr = [0, 1]

const fibonacciIterations = 15

for(let i = 2; i < fibonacciIterations; i ++){
  arr[i] = (arr[i -1] + arr[i-2])
}

console.log(arr)