import { Stock } from "./Stock.js";

export class Product {
  #id;
  #name;
  #quantity;
  #price;
  #isDeleted = false;

  constructor({ name, quantity, price }) {
    this.#id = Stock.generateId();
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(n) {
    this.#name = n;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(qt) {
    this.#quantity = qt;
  }

  get price() {
    return this.#price;
  }

  set price(pr) {
    this.#price = pr;
  }

  get isDeleted() {
    return this.#isDeleted;
  }

  delete() {
    this.#isDeleted = true;
  }

  update({ ...args }) {
    if (!args) return;

    this.#name = args.name ?? this.#name;
    this.#quantity = args.quantity ?? this.#quantity;
    this.#price = args.price ?? this.#price;
  }
}
