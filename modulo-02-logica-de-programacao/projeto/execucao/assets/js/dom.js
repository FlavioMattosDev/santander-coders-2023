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
registerButtonModal.addEventListener("click", toggleModal);
registerTaskOverlay.addEventListener("click", toggleModal);

// const teste = document.querySelectorAll("individual-task");

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  const isModalOpen = registerTaskModal.classList.contains("flex");

  if (e.key.toLowerCase() === "escape" && isModalOpen) {
    toggleModal();
  }
});
