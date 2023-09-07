import { Entity } from "./Entity.js";
import { Map } from "./Map.js";


export class Player extends Entity {
  #actualLife;
  #maxLife;
  #attack;
  #defense;

  set actualLife(actualLife) {
    this.#actualLife = actualLife;
  }

  set maxLife(maxLife) {
    this.#maxLife = maxLife;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  set defense(defense) {
    this.#defense = defense;
  }


  get actualLife() {
    return this.#actualLife;
  }
  get maxLife() {
    return this.#maxLife;
   }
  get attack() { 
    return this.#attack;
  }
  get defense() { 
    return this.#defense;
  }
  openChest(chest) {
    chest.give(this);
  }
  init() {
    const form = document.querySelector("#form")

    form.addEventListener('submit', e => {
      e.preventDefault()
      const formData = new FormData(form)
      const formValues = Object.fromEntries(formData.entries())

      const name = formValues["name"]
      const difficult = formValues["difficult"]
      const character = formValues["character"]

      this.name = name
      // Map.




    })
  }
}

