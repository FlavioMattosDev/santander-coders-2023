const { addTodo } = require("./addTodo");
const { editTodo } = require("./editTodo");
const { getTodoById } = require("./getTodoById");
const { listTodo } = require("./listTodo");
const { removeTodo } = require("./removeTodo");
const { generateRandomId } = require("./generateRandomId");

const possibleStatus = ["todo", "inProgress", "done"];

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

console.log(generateRandomId());

module.exports = { todos };
