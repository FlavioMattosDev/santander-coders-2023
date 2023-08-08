function calcular(){}
var j = 'abc'
var w = [1, 2, 3, 4, 5]
var veiculo = {
  carro: {
    rodas: 4,
    motor: true
  },
  moto: {
    rodas: 2,
    motor: true
  },
}

!function(){
  for(var veiculo = 0; veiculo <2 ; veiculo ++){
    for(var j = 0; j < 5; j++){

      for(var w = 0; w < 8; w++){

        for(var calcular = 0; calcular < 50; calcular++){

        }
      }
    }
  }
}()

// (() => {

//   for (let veiculo = 0; veiculo < 2; veiculo++) {
//     for (let j = 0; j < 5; j++) {
//       for (let w = 0; w < 8; w++) {
//         for (let calcular = 0; calcular < 50; calcular++) {
//         }
//       }
//     }
//   }
// })();

console.log(calcular)
console.log(w)
console.log(j)
console.log(veiculo)

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let odd = []
let even = []

for(let i = 0; i < lista.length; i++) {
  console.log(typeof i)
  lista[i] % 2 === 0 ? even.push(lista[i]) : odd.push(lista[i])
}

console.log(odd)
console.log(even)

for(i in lista){
  console.log(typeof(i))
}

for(i of lista){
  console.log(typeof(i))
}