class TaskColumn extends HTMLElement {
  constructor() {
    super();

    this.appendChild(this.build());
    this.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "taskColumn");

    const name = this.getAttribute("name");

    componentRoot.setAttribute("id", this.getAttribute("htmlID"));

    const columnName = document.createElement("p");
    columnName.setAttribute("class", "columnName");
    columnName.innerText = name;

    componentRoot.appendChild(columnName);

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

    .taskColumn {
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
      .taskColumn {
        min-width: 350px;
        margin-bottom: 10px;
      }
    }

    .taskColumn::-webkit-scrollbar {
      width: 0px;
    }

    .columnName {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    `;

    return style;
  }
}

customElements.define("task-column", TaskColumn);
