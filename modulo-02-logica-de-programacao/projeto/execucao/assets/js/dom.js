const addTaskButton = document.querySelector("button.add-task_button");
const registerButtonModal = document.querySelector("button.register-task_button");
const registerTaskModal = document.querySelector("div.registerTaskModal");


const clickInside = document.querySelector("div.registerTask")

const toggleModal = (e) => {
  e.stopPropagation()

  if(e.target === clickInside){
    return
  }

  const isModalOpen = registerTaskModal.classList.contains("flex");

  if(isModalOpen &&  !(e.target === registerTaskModal)){
    registerTaskModal.classList.remove(isModalOpen ? "flex" : "hidden");
    registerTaskModal.classList.add(isModalOpen ? "hidden" : "flex");

    return
  }

  registerTaskModal.classList.remove(isModalOpen ? "flex" : "hidden");
  registerTaskModal.classList.add(isModalOpen ? "hidden" : "flex");
};

addTaskButton.addEventListener("click", toggleModal);
registerButtonModal.addEventListener("click", toggleModal);
registerTaskModal.addEventListener("click", toggleModal);

// const teste = document.querySelectorAll("individual-task");