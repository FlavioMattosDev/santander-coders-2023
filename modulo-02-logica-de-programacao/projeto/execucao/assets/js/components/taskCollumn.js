class TaskCollumn extends HTMLElement {
  constructor() {
    super();

    this.appendChild(this.build());
    this.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "tasksCollumn");

    const name = this.getAttribute("name");

    componentRoot.setAttribute("id", this.getAttribute("htmlID"));

    const collumnName = document.createElement("p");
    collumnName.setAttribute("class", "collumnName");
    collumnName.innerText = name;

    // const collumnContent = document.createElement("div");
    // collumnContent.innerHTML = this.innerHTML;

    componentRoot.appendChild(collumnName);
    // componentRoot.appendChild(collumnContent);

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
    
    .tasksCollumn {
      background-color: #ebecf0;
      border-radius: 3px;
      padding: 10px;
      width: 30vw;
      min-width: 250px;
      max-width: 350px;
      margin-right: 5px;
      margin-left: 5px;
      max-height: 450px;
      overflow-y: auto;
    }
    
    @media screen and (max-width: 700px) {      
      .tasksCollumn {
        min-width: 350px;
        margin-bottom: 10px;
      }
    }

    .tasksCollumn::-webkit-scrollbar {
      width: 0px;
    }
    
    .collumnName {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    `;

    return style;
  }
}

customElements.define("task-collumn", TaskCollumn);
