/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M.
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/

const convertTimeToPmOrAm = (hour, min) => {
  const inputTime = new Date();
  inputTime.setHours(hour, min);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = new Intl.DateTimeFormat("pt-BR", options).format(
    inputTime
  );

  return formattedTime;
};

function conversor(strHoras) {
  try {
    let [horas, minutos] = strHoras.split(":").map(Number);

    if (horas < 0 || minutos < 0 || horas > 23 || minutos > 59) {
      throw new Error("Digite uma hora vÃ¡lida!");
    }

    let periodo = horas >= 12 ? "PM" : "AM";

    if (horas > 12) {
      horas = horas % 12;
    }

    horas = Math.floor(horas).toString().padStart(2, "0");
    minutos = Math.floor(minutos).toString().padStart(2, "0");

    console.log(`${horas}:${minutos} ${periodo}`);
  } catch (error) {
    console.log(error.message);
  }
}
