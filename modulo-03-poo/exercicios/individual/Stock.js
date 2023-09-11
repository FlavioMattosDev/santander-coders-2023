export class Stock {
  static #products = []

  static remove(id){
    const index = Stock.#products.findIndex(prod => prod.id === id)
    let productToRemove = Stock.#products[index]
    productToRemove.delete()
  }

  static add(product){
    Stock.#products.push(product)
  }

  static get products(){
    return Stock.#products
  }

  static generateId(){
    return Stock.#products.length + 1
  }

  static list(){
    return Stock.#products
  }
}