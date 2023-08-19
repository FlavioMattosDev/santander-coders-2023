import { addTask } from "./addTask.js";
import { editTask } from "./editTask.js";
import { getTaskById } from "./getTaskById.js";
import { listTasks } from "./listTasks.js";
import { removeTask } from "./removeTask.js";
import { listTasksByType } from "./listTasksByStatusType.js";

import { possibleStatus, tasks } from "./in-memory.js";

console.log("listTasks: ", listTasks());

const addedTask = addTask({
  title: "addTask",
  description: "task added",
  expectedConclusion: new Date(),
});

console.log("addTask: ", addedTask);

const taskCreation = listTasks();

const createdTask = listTasks().todo.at(-1);

console.log("listTasks after creation", taskCreation);

const taskEditionInvalid = editTask({
  title: "Titulo editado",
  description: "Descrição Editada",
  expectedConclusion: new Date(),
  status: "fasfsd",
  id: createdTask.id,
});

const taskEdition = editTask({
  title: "Titulo editado",
  description: "Descrição Editada",
  expectedConclusion: new Date(),
  status: possibleStatus.IN_PROGRESS,
  id: createdTask.id,
});

console.log("editTask status inválido: ", taskEditionInvalid);
console.log("editTask status correto: ", taskEdition);

const taskAfterUpdate = listTasks();

console.log("taskAfterUpdate", taskAfterUpdate);

const getTaskByIdResult = getTaskById(addedTask.id);

console.log("getTaskById: ", getTaskByIdResult);

const removeTaskResult = removeTask(addedTask.id);

console.log("removeTaskResult", removeTaskResult);

for (let i = 0; i < 10; i++) {
  addTask({
    title: "addTask",
    description: "task added",
    expectedConclusion: new Date(),
  });
}

for (let i = 0; i < 10; i++) {
  const todos = [0, 3, 6, 9];
  const inProgresses = [1, 4, 7];
  editTask({
    title: `Titulo editado ${
      todos.includes(i)
        ? possibleStatus.TODO
        : inProgresses.includes(i)
        ? possibleStatus.IN_PROGRESS
        : possibleStatus.DONE
    }`,
    description: "Descrição Editada",
    expectedConclusion: new Date(),
    status: todos.includes(i)
      ? possibleStatus.TODO
      : inProgresses.includes(i)
      ? possibleStatus.IN_PROGRESS
      : possibleStatus.DONE,
    id: tasks.at(i).id,
  });
}

console.log(listTasks());

const tasksByTypeDone = listTasksByType("done");
const tasksByTypeInProgress = listTasksByType("inProgress");
const tasksByTypeTodo = listTasksByType("todo");

console.log("tasksByTypeDone: ", tasksByTypeDone);
console.log("tasksByTypeInProgress: ", tasksByTypeInProgress);
console.log("tasksByTypeTodo: ", tasksByTypeTodo);
