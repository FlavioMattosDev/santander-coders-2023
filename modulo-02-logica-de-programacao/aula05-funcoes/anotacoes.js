function calcular() {}
var j = "abc";
var w = [1, 2, 3, 4, 5];
var veiculo = {
  carro: {
    rodas: 4,
    motor: true,
  },
  moto: {
    rodas: 2,
    motor: true,
  },
};

!(function () {
  for (var veiculo = 0; veiculo < 2; veiculo++) {
    for (var j = 0; j < 5; j++) {
      for (var w = 0; w < 8; w++) {
        for (var calcular = 0; calcular < 50; calcular++) {}
      }
    }
  }
})();

// (() => {
//   for (let veiculo = 0; veiculo < 2; veiculo++) {
//     for (let j = 0; j < 5; j++) {
//       for (let w = 0; w < 8; w++) {
//         for (let calcular = 0; calcular < 50; calcular++) {}
//       }
//     }
//   }
// })();

console.log(calcular);
console.log(w);
console.log(j);
console.log(veiculo);


const date = new Date().toUTCString()

const convertTimeToPmOrAm = (hour, min) => {
  const inputTime = new Date();
  inputTime.setHours(hour, min);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
    inputTime
  );

  return formattedTime
}

console.log(convertTimeToPmOrAm(12,0))
