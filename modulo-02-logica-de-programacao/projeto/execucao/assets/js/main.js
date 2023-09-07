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

const createdTask = taskCreation.todo.at(-1);

console.log("listTasks after creation", taskCreation);

const taskEditionInvalid = editTask({
  title: "Titulo editado",
  description: "Descrição Editada",
  expectedConclusion: new Date(),
  status: "fasfsd",
  id: createdTask.id,
});

const taskEditionInvalidId = editTask({
  title: "Titulo editado",
  description: "Descrição Editada",
  expectedConclusion: new Date(),
  status: possibleStatus.IN_PROGRESS,
  id: "fasdfsadfdas",
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
console.log("editTask di inválido: ", taskEditionInvalidId);

const taskAfterUpdate = listTasks();

console.log("taskAfterUpdate", taskAfterUpdate);

const getTaskByIdResult = getTaskById(addedTask.id);
const getTaskByIdResultInvalidId = getTaskById("afsdsafsda");

console.log("getTaskById: ", getTaskByIdResult);
console.log("getTaskById: ", getTaskByIdResultInvalidId);

const removeTaskResult = removeTask(addedTask.id);

console.log("removeTaskResult", removeTaskResult);

const listTasksAfterRemove = listTasks();

console.log("listTasksAfterRemove", listTasksAfterRemove);

for (let i = 0; i < 10; i++) {
  addTask({
    title: `addTask ${i + 1}`,
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
    }${i}`,
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

const doneTaskList = listTasksByType("done")
const todoTaskList = listTasksByType("todo")
const inProgressTaskList = listTasksByType("inProgress")
const inProgressTaskListWrong = listTasksByType("inProgressTaskListWrong")

console.log("doneTaskList", doneTaskList)
console.log("todoTaskList", todoTaskList)
console.log("inProgressTaskList", inProgressTaskList)
console.log("inProgressTaskListWrong", inProgressTaskListWrong)
