/*
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o
  salário de um colaborador e o
  reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5%

Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salaryToAdd = ({ initialValue, percentToAdd }) => {
  return (initialValue * percentToAdd) / 100;
};

export function formatPrice(cents) {
  // Verifica se o valor passado é numérico
  if (isNaN(+cents)) {
    return "Valor inválido";
  }

  const price = parseFloat((cents * 0.01).toString());

  // Cria um objeto NumberFormat para formatação de moeda
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedPrice = formatter.format(price);

  return formattedPrice;
}

const wageAdjustment = (actualSalary) => {
  if (!isNaN(actualSalary)) return;
  if (actualSalary < 0) return;

  const percentage =
    actualSalary <= 1500
      ? 20
      : actualSalary <= 1700
      ? 15
      : actualSalary <= 2000
      ? 10
      : 5;

  const salaryRaise = salaryToAdd({
    initialValue: actualSalary,
    percentToAdd: percentage,
  });
  const newSalary = actualSalary + salaryRaise;

  console.log(`Before wage ${formatPrice(actualSalary * 100)}`);
  console.log(`Raise percentage ${percentage}%`);
  console.log(`Salary raise ${formatPrice(salaryRaise * 100)}`);
  console.log(`New salary ${formatPrice(newSalary * 100)}`);
};

console.log(wageAdjustment(3769));

// const salario = 55342;

// const fatoresDeReajuste = new Map([
//     [1500, 0.20],
//     [1700, .15],
//     [2000, 0.10],
//     [Infinity, 0.05]
// ]);

// console.log(Object.entries([...fatoresDeReajuste]))

// let fatorDeAumento = [...fatoresDeReajuste].find(([salarioMaximo]) => salario < salarioMaximo)[1];

// console.log(fatorDeAumento)

// let aumento = salario * fatorDeAumento;
// let novoSalario = salario + aumento;

// console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
// console.log(`Porcentagem de aumento: ${fatorDeAumento * 100}%`);
// console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
// console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
