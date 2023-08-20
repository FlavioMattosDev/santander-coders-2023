import { addTask } from "./addTask.js";

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

  addTask(formValues);
  toggleModal();
});


const tasks = document.querySelectorAll(".task");
const allStatus = document.querySelectorAll(".tasksCollumn");
let draggableTask = null;

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTask = this;
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
  this.appendChild(draggableTask);
}

// TASKS LIST

const taskColumn = document.createElement("div");
const taskColumnTitle = document.createElement("h2");

taskColumn.setAttribute("class", "task-column")

