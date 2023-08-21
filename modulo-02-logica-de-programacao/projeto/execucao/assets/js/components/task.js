class Task extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(this.build());
    this.appendChild(this.style());
  }

  build() {
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const id = this.getAttribute("taskId");
    // const deleteButtonFunction = this.getAttribute(deleteButtonFunction)

    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "task");
    componentRoot.setAttribute("draggable", "true");
    if(id){
      componentRoot.setAttribute("id", id);
    }

    const taskHeader = document.createElement("div");
    taskHeader.setAttribute("class", "taskHeader");

    const taskTitle = document.createElement("p");
    taskTitle.setAttribute("class", "taskTitle");
    taskTitle.innerText = name;
    taskHeader.appendChild(taskTitle);

    const taskButtons = document.createElement("div");
    taskButtons.setAttribute("class", "taskButtons");

    // TODO
    // const concludeButton = document.createElement("button");
    // const concludeButtonIcon = document.createElement("i");
    // concludeButton.setAttribute("class", "taskButton");
    // concludeButton.title = "Move Task";
    // concludeButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -1 25 25"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 7.34189C18.6095 6.95136 17.9763 6.95136 17.5858 7.34189L10.3407 14.587C9.95016 14.9775 9.31699 14.9775 8.92647 14.587L6.38507 12.0456C5.99454 11.6551 5.36138 11.6551 4.97085 12.0456C4.58033 12.4361 4.58033 13.0693 4.97085 13.4598L7.51774 16C8.68969 17.1689 10.5869 17.1677 11.7574 15.9974L19 8.7561C19.3905 8.36558 19.3905 7.73241 19 7.34189Z" fill="#0F0F0F"></path> </g></svg>`;
    // concludeButton.appendChild(concludeButtonIcon);
    // taskButtons.appendChild(concludeButton);
    taskHeader.appendChild(taskButtons);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "taskButton");
    const deleteButtonIcon = document.createElement("i");
    deleteButton.title = "Delete Task";
    deleteButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="1 2 30 30"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;}</style></defs><title>trash-can</title><rect x="12" y="12" width="2" height="12"></rect><rect x="18" y="12" width="2" height="12"></rect><path d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"></path><rect x="12" y="2" width="8" height="2"></rect><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></g></svg>`;
    deleteButton.appendChild(deleteButtonIcon);
    taskButtons.appendChild(deleteButton);

    const taskContent = document.createElement("div");
    const taskDescription = document.createElement("p");
    taskDescription.setAttribute("class", "taskDescription");
    taskDescription.innerText = description;
    taskContent.appendChild(taskDescription);

    componentRoot.appendChild(taskHeader);
    componentRoot.append(taskContent);

    // deleteButton.addEventListener("click", deleteButtonFunction())

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
    * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    }

  .task {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    cursor: grab;
  }

  .taskHeader {
    display: flex;
    justify-content: space-between;
  }

  .taskTitle {
    font-weight: 500;
    font-size: 16px;
  }

  .taskButton {
    border: none;
    background-color: white;
    border: 1px solid #ebecf0;
    width: 20px;
    height: 20px;
    margin: 0 2px;
    cursor: pointer;
  }

  .taskDescription {
    font-weight: 400;
    font-size: 14px;
  }
    `;

    return style;
  }
}

customElements.define("individual-task", Task);
