// ? EXERCÍCIO for
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os impares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = [];
let even = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    odd.push(lista[i]);
  } else {
    even.push(lista[i]);
  }
}

// ? EXERCÍCIO for of
// Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
// que contém nome, nota 1 e nota2. Use o for para percorrer esse array
// e calcular a média das duas notas de cada aluno

const alunos = [
  { nome: "aluno 1", notas: [9, 8] },
  { nome: "aluno 2", notas: [8, 7] },
  { nome: "aluno 3", notas: [7 ,10] },
  { nome: "aluno 4", notas: [9, 5] },
  { nome: "aluno 5", notas: [3, 8] },
  { nome: "aluno 6", notas: [5, 9] },
];

for (const { nome, notas } of alunos) {
  const totalNotas = notas.reduce((acc, val) => acc + val, 0)
  const media = (totalNotas) / 2;

  console.log(`O aluno ${nome} tem uma média de ${media}.`);
}

// ? EXERCÍCIO While
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

const randomNumbers = []
const MAX_NUMBER = 60
const MAX_RANDOM_NUMBERS_ARRAY_LENGTH = 6

const generateRandomNumber = () => {
  return Math.floor(Math.random() * MAX_NUMBER + 1)
}

console.log(generateRandomNumber())

while(randomNumbers.length < MAX_RANDOM_NUMBERS_ARRAY_LENGTH) {
  const randomNumber = generateRandomNumber()

  if(!randomNumbers.includes(randomNumber)){
    randomNumbers.push(randomNumber)
  }
}

const resultNormal = randomNumbers
const resultSorted = [...resultNormal].sort((a,b) => a - b)