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

module.exports = { formatPrice };
