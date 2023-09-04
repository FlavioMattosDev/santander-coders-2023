export class Entity {
  #name
  #xActualPosition
  #yActualPosition
  #sidePosition

  get name(){
    return this.#name
  }

  set name(name){
    this.#name = name
  }

  get xActualPosition(){
    return this.#xActualPosition
  }

  set xActualPosition(xActualPosition){
    this.#xActualPosition = xActualPosition
  }

  get yActualPosition(){
    return this.#yActualPosition
  }

  set yActualPosition(yActualPosition){
    this.#yActualPosition = yActualPosition
  }

  get sidePosition(){
    return this.#sidePosition
  }

  set sidePosition(sidePosition){
    this.#sidePosition = sidePosition
  }

  get actualPosition(){
    return {
      x: this.xActualPosition,
      y: this.yActualPosition
    }
  }
}