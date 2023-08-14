/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).

    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:

    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/

const days = {
  domingo: 0,
  segunda: 1,
  terca: 2,
  quarta: 3,
  quinta: 4,
  sexta: 5,
  sabado: 6,
};

const DAY_TO_SEND_EMAIL = days.segunda;
const now = new Date();

const enviarEmail = require("./envia-email");

const storeUpdates = {
  newVehicles: [
    {
      name: "Carro Novo 1",
      acquireCondition:
        "Oferta especial de financiamento: Taxa de juros reduzida a 1.9%",
    },
    {
      name: "Carro Novo 2",
      acquireCondition: "Leasing flexível: Opção de troca a cada 2 anos",
    },
  ],
  mostSentVehicles: [
    {
      name: "Carro Popular A",
      acquireCondition: "Desconto de 10% para pagamento à vista",
    },
    {
      name: "SUV Premium B",
      acquireCondition: "Financiamento em até 60 meses com entrada facilitada",
    },
  ],
};

const clients = [
  {
    email: "alice@example.com",
    receiveNotification: true,
  },
  {
    email: "bob_coolguy@example.com",
    receiveNotification: false,
  },
  {
    email: "charlie_autoenthusiast@example.com",
    receiveNotification: true,
  },
  {
    email: "daisy_carlover@example.com",
    receiveNotification: true,
  },
  {
    email: "emma_carshopper@example.com",
    receiveNotification: false,
  },
  {
    email: "frank_speeddemon@example.com",
    receiveNotification: true,
  },
  {
    email: "grace_drivehappy@example.com",
    receiveNotification: true,
  },
];

const emailBodyBuilder = (updates) => {
  const newVehiclesBody = updates.newVehicles.reduce((acc, value) => {
    acc += `${value.name}, ${value.acquireCondition} \n`;

    return acc;
  }, "");

  console.log("newVehiclesBody", typeof newVehiclesBody)

  const mostSentVehiclesBody = updates.mostSentVehicles.reduce((acc, value) => {
    acc += `  ${value.name}, ${value.acquireCondition} \n`;

    return acc;
  }, "");

  const emailBody = `
  Carros Mais Vendidos \n
  ${mostSentVehiclesBody} \n
  Novos Carros \n
  ${newVehiclesBody}
  `;

  return emailBody;
};

const emailBody = emailBodyBuilder(storeUpdates);

const emailSender = ({ subject, clients, body }) => {
  if (now.getDay() !== DAY_TO_SEND_EMAIL) return;

  clients.forEach((client) => {
    if (!client.receiveNotification) return;

    enviarEmail(client.email, subject, body);
  });
};

emailSender({
  subject: "Nenhum",
  body: emailBody,
  clients,
});
