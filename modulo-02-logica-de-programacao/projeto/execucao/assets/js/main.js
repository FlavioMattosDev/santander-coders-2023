import { addTask } from "./addTask.js";
import { editTask } from "./editTask.js";
import { getTaskById } from "./getTaskById.js";
import { listTasks } from "./listTasks.js";
import { removeTask } from "./removeTask.js";
import { listTasksByType } from "./listTasksByStatusType.js";

import { generateRandomId } from "./generateRandomId.js";

console.log(generateRandomId());

const addTaskButton = document.querySelector("button.add-task_button");
const registerButtonModal = document.querySelector("register-task_button");
const registerTaskModal = document.querySelector("div.registerTaskModal");

const toggleModal = () => {
  const isModalOpen = registerTaskModal.classList.contains("flex");

  registerTaskModal.classList.remove(isModalOpen ? "flex" : "hidden");
  registerTaskModal.classList.add(isModalOpen ? "hidden" : "flex");
};

addTaskButton.addEventListener("click", toggleModal);

if (registerButtonModal) {
  registerButtonModal.addEventListener("click", toggleModal);
}
