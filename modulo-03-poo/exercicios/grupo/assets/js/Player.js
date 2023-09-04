import { Entity } from "./Entity.js";

export class Player extends Entity {
  #actualLife;
  #maxLife;
  #attack;
  #defense;

  set actualLife(actualLife) {
    this.#actualLife = actualLife;
  }
  // set maxLife(){

  // }
  // set attack(){

  // }
  // set defense(){

  // }

  get actualLife() {
    return this.#actualLife;
  }
  get maxLife() {}
  get attack() {}
  get defense() {}

  init() {}
}

const player = new Player();
player.name = "aaaaa";

console.log(player.name);
