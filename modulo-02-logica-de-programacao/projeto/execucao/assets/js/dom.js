import { addTask } from "./addTask.js";
import { listTasksByType } from "./listTasksByStatusType.js";

const addTaskButton = document.querySelector("button.add-task_button");
const registerButtonModal = document.querySelector(
  "button.register-task_button"
);
const registerTaskModal = document.querySelector("div.registerTaskModal");
const registerTaskOverlay = document.querySelector(
  "div.register-modal_overlay"
);

const toggleModal = (e) => {
  const isModalOpen = registerTaskModal.classList.contains("flex");

  registerTaskModal.classList.remove(isModalOpen ? "flex" : "hidden");
  registerTaskModal.classList.add(isModalOpen ? "hidden" : "flex");
};

addTaskButton.addEventListener("click", toggleModal);
// registerButtonModal.addEventListener("click", toggleModal);
registerTaskOverlay.addEventListener("click", toggleModal);

// const teste = document.querySelectorAll("individual-task");

document.addEventListener("keydown", (e) => {
  const isModalOpen = registerTaskModal.classList.contains("flex");

  if (e.key.toLowerCase() === "escape" && isModalOpen) {
    toggleModal();
  }
});

const tableTodo = document.querySelector("#toDo");
const tableInProgress = document.querySelector("#inProgress");
const tableDone = document.querySelector("#done");

const taskCreation = ({ task, type }) => {
  const todoTask = document.createElement("individual-task");
  todoTask.setAttribute("name", task.title);
  todoTask.setAttribute("description", task.description);
  todoTask.setAttribute("taskId", task.id);

  switch (type) {
    case "done":
      tableDone.appendChild(todoTask);
      break;
    case "inProgress":
      tableInProgress.appendChild(todoTask);
      break;
    default:
      tableTodo.appendChild(todoTask);
  }
};

const tasksByTypeTodo = listTasksByType("todo");
const tasksByTypeDone = listTasksByType("done");
const tasksByTypeInProgress = listTasksByType("inProgress");

const tasksListCreation = () => {
  tasksByTypeTodo.forEach((task) => {
    taskCreation({ task, type: "todo" });
  });

  tasksByTypeDone.forEach((task) => {
    taskCreation({ task, type: "done" });
  });

  tasksByTypeInProgress.forEach((task) => {
    taskCreation({ task, type: "inProgress" });
  });
};

tasksListCreation();

let tasks;
const allStatus = document.querySelectorAll(".taskColumn");
let draggableTask = null;

setInterval(() => {
  tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
  });
}, 1000);

function dragStart() {
  draggableTask = this;
  console.log(draggableTask);
  setTimeout(() => {
    this.style.display = "none";
    this.style.opacity = "1";
  }, 0);
}

function dragEnd() {
  draggableTask = null;
  this.style.display = "flex";
}

allStatus.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {}

function dragLeave() {}

function dragDrop() {
  console.log(draggableTask)
  this.appendChild(draggableTask);
}

const registerTaskForm = document.querySelector("form.register-task_form");

registerTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(registerTaskForm);
  const formValues = Object.fromEntries(formData.entries());

  const formDescription = formValues["description"];
  const formExpectedConclusion = formValues["expectedConclusion"];
  const formTitle = formValues["title"];

  if (!formDescription || !formExpectedConclusion || !formTitle) {
    return alert("Preencha todos os dados do formulário!");
  }

  const createdTask = addTask(formValues);
  toggleModal();

  console.log("createdTask", createdTask)

  taskCreation({
    task: createdTask,
    type: "todo",
  });
});
