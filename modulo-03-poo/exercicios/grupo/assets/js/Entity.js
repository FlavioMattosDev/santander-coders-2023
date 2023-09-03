export class Entity {
  #name
  #xActualPosition
  #yActualPosition
  #sidePosition

  set name(name){
    this.#name = name
  }

  get name(){
    return this.#name
  }
}