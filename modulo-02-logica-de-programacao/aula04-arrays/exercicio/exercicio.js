const formatPrice = (cents) => {
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
};

// ? push()
const arrPush = [];

arrPush.push("el1");
arrPush.push("el2");

console.log("arrPush", arrPush.length); // * 2

console.log({
  item: "arrPush",
  result: arrPush.length,
  expectedResult: 2,
});

// ? pop()
const numbersPop = [1, 2, 3, 4];

numbersPop.pop();
numbersPop.pop();

console.log({
  item: "numbersPop",
  result: numbersPop.length,
  expectedResult: 2,
});

// ? shift()
const languagesShift = ["javascript", "python", "golang", "java"];
languagesShift.shift();
console.log({
  item: "languagesShift",
  result: languagesShift.length,
  expectedResult: 3,
});

languagesShift.shift();
console.log({
  item: "languagesShift",
  result: languagesShift.length,
  expectedResult: 2,
});

// ? at()
const productsAt = ["sabão", "detergente", "amaciante", "alvejante", "sapólio"];

const productsFirstAt = productsAt.at(0);
const productsThirdAt = productsAt.at(2);
const productsLastAt = productsAt.at(-1);

console.log({
  items: ["productsFirstAt", "productsThirdAt", "productsLastAt"],
  result: { productsFirstAt, productsThirdAt, productsLastAt },
  expectedResult: {
    productsFirstAt: "sabão",
    productsThirdAt: "amaciante",
    productsLastAt: "sapólio",
  },
});

// ? concat()
const list1Concat = ["banana", "pera", "melancia"];
const list2Concat = ["alface", "tomate", "rucula"];
const list3Concat = ["limao", "laranja", "acerola"];
const list4Concat = ["pimenta", "pimentao", "alho"];

const list1list2Concat = Array().concat(list1Concat, list2Concat);

console.log({
  item: "list1list2Concat",
  result: list1list2Concat.length,
  expectedResult: 6,
});

const listsConcat = list1Concat.concat(list2Concat, list3Concat, list4Concat);

console.log({
  item: "listsConcat",
  result: listsConcat.length,
  expectedResult: 12,
});

// ? every()

const peopleEvery = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

const everyPersonAreOverOrEqualEighteenYearsOld = peopleEvery.every(
  (person) => person.idade >= 18
);
const everyPersonHasNameBiggerThanThreeCharacters = peopleEvery.every(
  (person) => person.nome.length >= 3
);
const everyPersonHasNameAndAge = peopleEvery.every(
  (person) => person.idade && person.nome
);

console.log({
  items: [
    "everyPersonAreOverOrEqualEighteenYearsOld",
    "everyPersonHasNameBiggerThanThreeCharacters",
    "everyPersonHasNameAndAge",
  ],
  result: {
    everyPersonAreOverOrEqualEighteenYearsOld,
    everyPersonHasNameBiggerThanThreeCharacters,
    everyPersonHasNameAndAge,
  },
  expectedResult: {
    everyPersonAreOverOrEqualEighteenYearsOld: false,
    everyPersonHasNameBiggerThanThreeCharacters: true,
    everyPersonHasNameAndAge: true,
  },
});

// ? filter()
const students = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const studentsWithAgeBiggerOrEqualEighteen = students.filter(
  (student) => student.idade >= 18
);
const studentsWithAgeLowerThanTwenty = students.filter(
  (student) => student.idade < 20
);
const studentsWithNameStartingWithJ = students.filter((student) =>
  student.nome.startsWith("J")
);

const filterResult = {
  studentsWithAgeBiggerOrEqualEighteen: {
    result: studentsWithAgeBiggerOrEqualEighteen,
    expectedResult: [
      { nome: "Ana", idade: 20 },
      { nome: "Pedro", idade: 18 },
      { nome: "Maria", idade: 22 },
      { nome: "Lucas", idade: 19 },
      { nome: "Julia", idade: 21 },
    ],
  },
  studentsWithAgeLowerThanTwenty: {
    result: studentsWithAgeLowerThanTwenty,
    expectedResult: [
      { nome: "Pedro", idade: 18 },
      { nome: "João", idade: 17 },
      { nome: "Lucas", idade: 19 },
    ],
  },
  studentsWithNameStartingWithJ: {
    result: studentsWithNameStartingWithJ,
    expectedResult: [
      { nome: "João", idade: 17 },
      { nome: "Julia", idade: 21 },
    ],
  },
};

console.log("filterResult", filterResult);

// ? find()
const placesFind = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

const searchPlaceBasedOnCapacity = ({ placesToSearch, capacity }) => {
  return placesToSearch.find((place) => place.capacidade >= capacity);
};

const firstPlaceWithCapacityOfTen = searchPlaceBasedOnCapacity({
  capacity: 10,
  placesToSearch: placesFind,
});

const firstPlaceWithCapacityOfTwentyFive = searchPlaceBasedOnCapacity({
  capacity: 25,
  placesToSearch: placesFind,
});
const firstPlaceWithCapacityOfForty = searchPlaceBasedOnCapacity({
  capacity: 40,
  placesToSearch: placesFind,
});

const findResult = {
  firstPlaceWithCapacityOfTen: {
    result: {
      ...firstPlaceWithCapacityOfTen,
    },
    expectedResult: { nome: "Auditório", capacidade: 50 },
  },
  firstPlaceWithCapacityOfTwentyFive: {
    result: {
      ...firstPlaceWithCapacityOfTwentyFive,
    },
    expectedResult: { nome: "Auditório", capacidade: 50 },
  },
  firstPlaceWithCapacityOfForty: {
    result: {
      ...firstPlaceWithCapacityOfForty,
    },
    expectedResult: { nome: "Auditório", capacidade: 50 },
  },
};

console.log("findResult", findResult);

// ? forEach()
const pizzasForEach = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

pizzasForEach.forEach((pizza) =>
  console.log(
    `A pizza sabor ${pizza.sabor} custa ${formatPrice(pizza.valor * 100)}.`
  )
);

// ? map()

const peopleMap = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const peopleMapWithImc = peopleMap.map((person) => {
  return {
    nome: person.nome,
    imc: person.peso / Math.pow(person.altura, 2),
  };
});

console.log("peopleMapWithImc", peopleMapWithImc);

// ? reduce()

const studentsReduce = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const studentsReduceWithNameAndMedia = studentsReduce.map((student) => {
  const calcMedia =
    student.notas.reduce((acc, val) => acc + val) / student.notas.length;

  return {
    name: student.nome,
    media: calcMedia,
  };
});

console.log("studentsReduceWithNameAndMedia", studentsReduceWithNameAndMedia);

// ? reverse()
const numerosReverse = [1, 2, 3, 4, 5];

const numerosReverseReverted = numerosReverse.reverse();

console.log("numerosReverseReverted", numerosReverseReverted);

// ? some()
const employeesSome = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const someEmployeeHasSalaryBiggerOrEqualThan1500 = employeesSome.some(
  (employee) => employee.salario >= 1500
);
const someEmployeeHasSalaryLowerOrEqualThan1000 = employeesSome.some(
  (employee) => employee.salario <= 1000
);

console.log(someEmployeeHasSalaryBiggerOrEqualThan1500);
console.log(someEmployeeHasSalaryLowerOrEqualThan1000);

// ? sort()
const athletes = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const athletesOrderedAscByWeight = [...athletes].sort(
  (a, b) => a.peso - b.peso
);
const athletesOrderedDescByHeight = [...athletes].sort(
  (a, b) => b.altura - a.altura
);
const athletesOrderedAscByName = [...athletes].sort((a, b) =>
  a.nome.localeCompare(b.nome)
);

console.log(athletesOrderedAscByWeight);
console.log(athletesOrderedDescByHeight);
console.log(athletesOrderedAscByName);

console.clear();

const toSorted1 = athletes.toSorted((a, b) => a.peso - b.peso);
const toSorted2 = athletes.toSorted((a, b) => b.altura - a.altura);
const toSorted3 = athletes.toSorted((a, b) => a.nome.localeCompare(b.nome));

console.log("toSorted1", toSorted1); // * node 20
console.log("toSorted2", toSorted2); // * node 20
console.log("toSorted3", toSorted3); // * node 20
