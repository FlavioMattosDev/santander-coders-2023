export class Stock {
  static #products = [];

  static remove(id) {
    const index = Stock.#products.findIndex((prod) => prod.id === id);
    let productToRemove = Stock.#products[index];
    productToRemove.delete();
  }

  static add(product) {
    Stock.#products.push(product);
  }

  static update(product) {
    const productIndex = Stock.#products.findIndex(
      (prd) => prd.id === product.id
    );
    Stock.#products.splice(productIndex, 1, product);
    // Stock.#products[productIndex] = product;
  }

  static getProductById(id) {
    return Stock.#products.find((prod) => prod.id === id);
  }

  static get products() {
    return Stock.#products;
  }

  static generateId() {
    return Stock.#products.length + 1;
  }

  static list() {
    return Stock.#products;
  }
}
