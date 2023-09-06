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
  Map.


  
  
})
  }
}

const player1 = new Player();
player1.actualLife = 100;
player1.maxLife = 100;
player1.attack = 10;
player1.defense = 5;

// const player2 = new Player();
// player2.actualLife = 80;
// player2.maxLife = 80;
// player2.attack = 15;
// player2.defense = 10;

// const player3 = new Player();
// player3.actualLife = 120;
// player3.maxLife = 120;
// player3.attack = 8;
// player3.defense = 12;

// const player4 = new Player();
// player4.actualLife = 90;
// player4.maxLife = 90;
// player4.attack = 12;
// player4.defense = 8;

// const player5 = new Player();
// player5.actualLife = 110;
// player5.maxLife = 110;
// player5.attack = 9;
// player5.defense = 11;

console.log(player.name);
