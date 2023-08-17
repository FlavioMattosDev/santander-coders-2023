const fatorial = (n) => {
  if (n < 0) return NaN;
  if (n < 2) return 1;

  let fatorial = 1;
  for (let i = 2; i <= n; i++) {
    const test = fatorial * i;
    console.log(fatorial);
    console.log(i);
    console.log(test);
    fatorial *= i;
  }
  return fatorial;
};

const number = 5;
const resultadoIterativoResult = fatorial(number);
console.log(`O fatorial de ${number} é ${resultadoIterativoResult}`);

function fatorialRecursivo(n, acc = 1) {
  console.log(n);
  console.log(acc);
  console.log(n * acc);
  if (n < 0) return NaN;
  if (n < 2) return acc;

  return fatorialRecursivo(n - 1, n * acc);
}

const fatorialRecursivoResult = fatorialRecursivo(number);
console.log(`O fatorial de ${number} é ${fatorialRecursivoResult}`);
