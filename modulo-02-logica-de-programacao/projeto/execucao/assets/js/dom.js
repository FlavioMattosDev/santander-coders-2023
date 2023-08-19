const addTaskButton = document.querySelector("button.add-task_button");
const registerButtonModal = document.querySelector(
  "button.register-task_button"
);
const registerTaskModal = document.querySelector("div.registerTaskModal");
const registerTask = document.querySelector("div.registerTask");

let isModalOpen = false;
const toggleModal = (e) => {
  e.stopPropagation();

  isModalOpen = !isModalOpen;
  isModalOpen
    ? (registerTaskModal.style.display = "flex")
    : (registerTaskModal.style.display = "none");

  registerTask.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

addTaskButton.addEventListener("click", toggleModal);
registerButtonModal.addEventListener("click", toggleModal);
registerTaskModal.addEventListener("click", toggleModal);
