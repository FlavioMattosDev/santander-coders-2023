const valueToAdd = ({initialValue, percentToAdd}) =>{
  return initialValue * percentToAdd / 100
}

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
  if(typeof actualSalary !== "number") return "Valor inválido"
  if(+actualSalary < 0) return "Valor inválido"

  const percentage = actualSalary <= 1500 ? 20 : actualSalary <= 1700 ? 15 : actualSalary <= 2000 ? 10 : 5

    const salaryRaise = valueToAdd({initialValue: actualSalary, percentToAdd: percentage})
    const newSalary = actualSalary + salaryRaise

    console.log(`Before wage ${formatPrice(actualSalary * 100)}`)
    console.log(`Raise percentage ${percentage}%`)
    console.log(`Salary raise ${formatPrice(salaryRaise * 100)}`)
    console.log(`New salary ${formatPrice(newSalary * 100)}`)
}

console.log(wageAdjustment(1500))

// const salario = 55342;

const fatoresDeReajuste = new Map([
    [1500, 0.20],
    [1700, .15],
    [2000, 0.10],
    [Infinity, 0.05]
]);

// console.log(fatoresDeReajuste)

// let fatorDeAumento = [...fatoresDeReajuste].find(([salarioMaximo]) => salario < salarioMaximo)[1];

// console.log(fatorDeAumento)

// let aumento = salario * fatorDeAumento;
// let novoSalario = salario + aumento;

// console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
// console.log(`Porcentagem de aumento: ${fatorDeAumento * 100}%`);
// console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
// console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);