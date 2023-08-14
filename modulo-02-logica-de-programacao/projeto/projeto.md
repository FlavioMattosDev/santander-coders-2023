---
marp: true
---

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
    status: "todo",
  },
  {
    id: "2",
    title: "Fazer algo",
    status: "todo",
  },
];

const possibleStatus = ["todo", "inProgress", "done"];
```

### Funções que serão criadas

```javascript
const addTodo = () => {};
const editTodo = () => {};
const removeTodo = () => {};
const listTodo = () => {};
const getTodoById = () => {};
```

## addTodo() - Leandro

Deverá receber um objeto, contendo o id, title e status, e adicionar ao final do array de todos, esse novo objeto.

## editTodo() - Georg Matheus

Deverá receber um objeto, com id sendo obrigatório, e titulo e status opcionais.
Deverá procurar dentro do array, o index do array, onde o id da match com o id recebido, e fazer as alterações de titulo e/ou status.

## removeTodo() - Anderson Junior

Deverá receber o id do "todo", e fazer um filtro, removendo o "todo", que que der match com o id passado.

## listTodo() - Jéssica Santana

Deverá listar todos os todos existentes, separando por tipo: "todo", "inProgress", "done".

## getTodoById()

Devera receber o id do "todo", e retornar os dados detalhados dele.

## Observações extras:

- Será feito uma função para gerar id's aleatórios únicos.
- As funções deverão ser criadas em um arquivo js a parte, por ex: editTodo.js; e deverão ser exportadas no padrão module.exports (Seguir o padrão do arquivo de email disponibilizado).
- Os status possíveis deverão ser seguidos.
- Na pasta execução, é possível pegar um boilerplate de como deverá ser feito.
