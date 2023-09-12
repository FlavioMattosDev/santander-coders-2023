import { Formatter } from "./Formatter.js";
import { Product } from "./Product.js";
import { Stock } from "./Stock.js";

export class Dom {
  #body;
  #container;
  #form;

  constructor() {
    this.#body = document.querySelector("body");
    this.#body.className = "bg-stone-100 flex justify-center w-full";
    this.#container = this.createDiv();
    this.#container.className =
      "flex flex-col gap-4 w-full max-w-[64rem] min-h-screen bg-stone-200 px-4";
    this.#body.appendChild(this.#container);
  }

  list() {
    const rootList = this.createTable();
    rootList.innerHTML = null;
    const listHead = this.createTHead();
    const listBody = this.createTBody();

    const products = Stock.products;

    const theadRow = this.createTr();
    const thId = this.createTh({ title: "Id" });
    const thName = this.createTh({ title: "Nome" });
    const thPrice = this.createTh({ title: "Preço" });
    const thQuantity = this.createTh({ title: "Quantidade" });
    const thActions = this.createTh({ title: "Ações" });

    theadRow.appendChild(thId);
    theadRow.appendChild(thName);
    theadRow.appendChild(thPrice);
    theadRow.appendChild(thQuantity);
    theadRow.appendChild(thActions);

    listHead.appendChild(theadRow);

    products.forEach((product) => {
      if (!product.isDeleted) {
        const productRow = this.createTr();
        productRow.className = "odd:bg-blue-400 odd:text-blue-900";

        const tdId = this.createTd({ title: product.id });
        const tdName = this.createTd({ title: product.name });
        const tdPrice = this.createTd({
          title: Formatter.formatPriceThroughCents(product.price * 100),
        });
        const tdQuantity = this.createTd({ title: product.quantity });
        const updateButton = this.createUpdateButton(product.id);
        const deleteButton = this.createDeleteButton(product.id);

        const actionsDiv = this.createDiv();
        actionsDiv.className = "flex gap-2 items-center justify-center";

        actionsDiv.appendChild(updateButton);
        actionsDiv.appendChild(deleteButton);

        productRow.appendChild(tdId);
        productRow.appendChild(tdName);
        productRow.appendChild(tdPrice);
        productRow.appendChild(tdQuantity);
        productRow.appendChild(actionsDiv);

        listBody.appendChild(productRow);
      }
    });

    rootList.appendChild(listHead);
    rootList.appendChild(listBody);

    this.#container.appendChild(rootList);
  }

  form() {
    const rootForm = this.createForm();
    rootForm.innerHTML = "";

    rootForm.classList = "flex flex-col gap-2";

    const heading = this.createHeading("h1");
    heading.className =
      "text-center text-3xl font-semibold text-stone-900 mt-10";
    heading.innerText = "Formulário de adição de produtos";

    const inputContainerClasses = "flex flex-col w-full";

    const inputNameContainer = this.createDiv();
    inputNameContainer.className = inputContainerClasses;

    const inputNameLabel = this.createLabel({
      for: "name",
      text: "Nome do produto",
    });
    const inputName = this.createInput({
      type: "text",
      placeholder: "Digite o nome",
      name: "name",
    });

    const inputPriceContainer = this.createDiv();
    inputNameContainer.className = inputContainerClasses;

    const inputPriceLabel = this.createLabel({
      for: "price",
      text: "Preço do produto",
    });
    const inputPrice = this.createInput({
      type: "number",
      placeholder: "Digite o preço",
      name: "price",
    });

    const inputQuantityContainer = this.createDiv();
    inputNameContainer.className = inputContainerClasses;

    const inputQuantityLabel = this.createLabel({
      for: "quantity",
      text: "Quantidade do produto",
    });
    const inputQuantity = this.createInput({
      type: "number",
      placeholder: "Digite a quantidade",
      name: "quantity",
    });

    const submitButton = this.createButton({
      type: "submit",
      text: "Adicionar Produto",
    });

    submitButton.className += " bg-blue-700 text-stone-50 mt-2 rounded-lg";

    inputNameContainer.appendChild(inputNameLabel);
    inputNameContainer.appendChild(inputName);

    inputPriceContainer.appendChild(inputPriceLabel);
    inputPriceContainer.appendChild(inputPrice);

    inputQuantityContainer.appendChild(inputQuantityLabel);
    inputQuantityContainer.appendChild(inputQuantity);

    rootForm.appendChild(heading);
    rootForm.appendChild(inputNameContainer);
    rootForm.appendChild(inputPriceContainer);
    rootForm.appendChild(inputQuantityContainer);
    rootForm.appendChild(submitButton);

    this.#container.appendChild(rootForm);
  }

  createDiv() {
    return document.createElement("div");
  }

  createForm() {
    return document.createElement("form");
  }

  createInput({ type = "text", placeholder = "", ...args }) {
    const newInput = document.createElement("input");
    newInput.className =
      "outline-none px-4 py-2 border-2 border-amber-600 text-stone-800 rounded-md w-full disabled:opacity-40";
    newInput.type = type;
    newInput.placeholder = placeholder;
    newInput.name = args.name ?? "";
    newInput.id = args.name ?? "";
    newInput.value = args.value ?? "";
    return newInput;
  }

  createLabel({ ...args }) {
    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", args.for ?? "");
    newLabel.innerText = args.text ?? "";
    return newLabel;
  }

  createButton({ ...args }) {
    const newButton = document.createElement("button");
    newButton.innerText = args.text ?? "";
    newButton.type = args.type || "button";
    newButton.className = "outline-none px-4 py-2 uppercase w-full";

    return newButton;
  }

  createHeading(type) {
    if (!type.startsWith("h")) return;

    return document.createElement(type);
  }

  createTable() {
    return document.createElement("table");
  }

  createTBody() {
    const newTBody = document.createElement("tbody");

    return newTBody;
  }

  createTHead() {
    const newTHead = document.createElement("thead");
    newTHead.className = "bg-blue-300";

    return newTHead;
  }

  createTr() {
    const newTr = document.createElement("tr");

    return newTr;
  }

  createTh({ ...args }) {
    const newTh = document.createElement("th");
    newTh.innerText = args.title ?? "";
    newTh.className = "uppercase ";

    return newTh;
  }

  createTd({ ...args }) {
    const newTd = document.createElement("td");
    newTd.innerText = args.title ?? "";
    newTd.className = "text-center";

    return newTd;
  }

  createUpdateButton(id) {
    const newUpdateButton = document.createElement("button");
    newUpdateButton.className = "w-7 h-7";

    const newUpdateIcon = document.createElement("i");
    newUpdateIcon.className = "ph-fill ph-gear-six text-blue-800 w-full";

    newUpdateButton.appendChild(newUpdateIcon);

    newUpdateButton.addEventListener("click", () => {
      this.createEditModal(id);
    });

    return newUpdateButton;
  }

  createEditModal(id) {
    const editModal = this.createDiv();
    editModal.id = `edit-modal-${id}`;
    editModal.className =
      "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inset-0 w-screen h-screen";

    const editModalOverlay = this.createDiv();
    editModalOverlay.classList = "-z10 bg-black/70 absolute inset-0";

    const editProductForm = this.createForm();
    editProductForm.className =
      "flex flex-col gap-2 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[50vw] p-5 bg-stone-50 rounded-lg";

    const formHeading = this.createHeading("h1");
    formHeading.innerText = "Editar Produto";
    formHeading.classList = "text-center font-semibold text-3xl"

    const product = Stock.getProductById(id);

    const idInputWrapper = this.createDiv();
    const nameInputWrapper = this.createDiv();
    const priceInputWrapper = this.createDiv();
    const quantityInputWrapper = this.createDiv();

    const idInputLabel = this.createLabel({
      for: "id-edit",
      text: "Id",
    });

    const nameInputLabel = this.createLabel({
      for: "name-edit",
      text: "Nome",
    });

    const priceInputLabel = this.createLabel({
      for: "price-edit",
      text: "Preço",
    });

    const quantityInputLabel = this.createLabel({
      for: "quantity-edit",
      text: "Quantidade",
    });

    const idInput = this.createInput({
      type: "text",
      value: product.id,
    });
    idInput.setAttribute('disabled', true)

    const nameInput = this.createInput({
      type: "text",
      value: product.name,
      name: "name-edit",
    });

    const priceInput = this.createInput({
      type: "text",
      value: product.price,
      name: "price-edit",
    });

    const quantityInput = this.createInput({
      type: "text",
      value: product.quantity,
      name: "quantity-edit",
    });

    const editFormSubmitButton = this.createButton({
      text: "Editar",
      type: "submit",
    })
    editFormSubmitButton.className += " bg-blue-700 text-stone-50 mt-2 rounded-lg"

    idInputWrapper.appendChild(idInputLabel);
    idInputWrapper.appendChild(idInput);

    nameInputWrapper.appendChild(nameInputLabel);
    nameInputWrapper.appendChild(nameInput);

    priceInputWrapper.appendChild(priceInputLabel);
    priceInputWrapper.appendChild(priceInput);

    quantityInputWrapper.appendChild(quantityInputLabel);
    quantityInputWrapper.appendChild(quantityInput);

    editProductForm.appendChild(formHeading);
    editProductForm.appendChild(idInputWrapper);
    editProductForm.appendChild(nameInputWrapper);
    editProductForm.appendChild(priceInputWrapper);
    editProductForm.appendChild(quantityInputWrapper);
    editProductForm.appendChild(editFormSubmitButton);

    editModal.appendChild(editProductForm);

    this.#body.appendChild(editModalOverlay);
    this.#body.appendChild(editModal);

    editProductForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const formData = new FormData(editProductForm);
      const formValues = Object.fromEntries(formData.entries());

      const name = formValues["name-edit"];
      const price = formValues["price-edit"];
      const quantity = formValues["quantity-edit"];

      if (!name || !price || !quantity) {
        return alert("Dados incorretos");
      }

      product.name = name
      product.price = price
      product.quantity = quantity

      Stock.update(product)

      this.#body.removeChild(editModalOverlay);
      this.#body.removeChild(editModal);

      this.resetBody()
    })
  }

  createDeleteButton(id) {
    const newDeleteButton = document.createElement("button");
    newDeleteButton.className = "w-7 h-7";

    const newUpdateIcon = document.createElement("i");
    newUpdateIcon.className = "ph-bold ph-trash text-blue-800 w-full";

    newDeleteButton.appendChild(newUpdateIcon);

    newDeleteButton.addEventListener("click", () => {
      Stock.remove(id);
      this.resetBody();
    });

    return newDeleteButton;
  }

  addNewProductListener() {
    this.#form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(this.#form);
      const formValues = Object.fromEntries(formData.entries());

      const name = formValues["name"];
      const price = formValues["price"];
      const quantity = formValues["quantity"];

      if (!name || !price || !quantity) {
        return alert("Dados incorretos");
      }

      const newProduct = new Product({
        name,
        price,
        quantity,
      });

      Stock.add(newProduct);

      this.resetBody();
    });
  }

  resetBody() {
    this.#container.innerHTML = "";
    this.form();
    this.list();
    this.#form = document.querySelector("form");
    this.addNewProductListener();
  }

  initialRender() {
    this.form();
    this.list();
  }

  init() {
    this.initialRender();
    this.#form = document.querySelector("form");
    this.addNewProductListener();
  }
}
