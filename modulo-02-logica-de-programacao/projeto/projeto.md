# Lógica de Programação - Projeto final

## O que?

Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

---

## Requisitos

Dentre as funcionalidades, espera-se que seja possível:

- Adicionar uma tarefa
- Editar uma tarefa salva
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)

---

## Observações

Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um array para ser a lista das tarefas cadastradas.

# Execução

### Estrutura dos dados

```javascript
const todos = [
  {
    id: "1",
    title: "Fazer algo",
    description: "",
    createdAt: new Date(),
    expectedConclusion: "",
    status: "todo",
  }
];

const possibleStatus = ["todo", "inProgress", "done"];
```

### Funções que serão criadas

```javascript
const addTask = () => {};
const editTask = () => {};
const removeTask = () => {};
const listTasks = () => {};
const getTaskById = () => {};
const listTasksByStatusType = () => {};
```

## addTask() - Jéssica Santana

- Deverá receber um objeto, contendo o title, description e expectedConclusion, e adicionar ao final do array de todos, esse novo objeto.
- Deverá gerar um id aleatório, com base na função generateRandomId
- Deverá gerar um createdAt automático
- Deverá colocar o valor inicial do status como "todo"

## editTask() - Georg Matheus

- Deverá receber um objeto, com id sendo obrigatório, e titulo e status opcionais.
- Deverá procurar dentro do array, o index do array, onde o id da match com o id recebido, e fazer as alterações de title, description, expectedConclusion,e status.
- Deverá validar se o status passado é "todo" || "inProgress" || "done
- Se não for passado nenhum campo, retorne sem fazer nada

## removeTask() - Anderson Junior

- Deverá receber o id da task, e fazer um filtro, removendo a task, que que der match com o id passado.

## listTasks() - Leandro

- Deverá listar todas as tasks existentes, separando por tipo: ("todo" || "inProgress" || "done").

## getTaskById() José Flávio

- Devera receber o id do "todo", e retornar os dados detalhados dele.

## listTasksByStatusType - Alan Junqueira

- Deverá listar todas as tasks existentes, com o tipo: ("todo" || "inProgress" || "done") especificado.

## Observações extras:

- Será feito uma função para gerar id's aleatórios únicos.
- As funções deverão ser criadas em um arquivo js a parte, por ex: editTodo.js; e deverão ser exportadas no padrão module.exports (Seguir o padrão do arquivo de email disponibilizado).
- Os status possíveis deverão ser seguidos.
- Na pasta execução, é possível pegar um boilerplate de como deverá ser feito.
