import { Map } from "./Map.js";

export class Entity {
  #name;
  #xActualPosition;
  #yActualPosition;
  #sidePosition;
  #character
  #id

  constructor(){
    console.log('entrou', ++Map.mappedEntities.length)
    this.#id = ++Map.mappedEntities.length;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get xActualPosition() {
    return this.#xActualPosition;
  }

  set xActualPosition(xActualPosition) {
    this.#xActualPosition = xActualPosition;
  }

  get yActualPosition() {
    return this.#yActualPosition;
  }

  set yActualPosition(yActualPosition) {
    this.#yActualPosition = yActualPosition;
  }

  get sidePosition() {
    return this.#sidePosition;
  }

  set sidePosition(sidePosition) {
    // "left" | "right" | "up" | "down"
    this.#sidePosition = sidePosition;
  }

  get character() {
    return this.#character;
  }

  set character(character) {
    // "left" | "right" | "up" | "down"
    this.#character = character;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id
  }

  get actualPosition() {
    return {
      x: this.xActualPosition,
      y: this.yActualPosition,
    };
  }

  get moveLeft() {
    this.xActualPosition = Map.canMove({
      x: this.xActualPosition - 1,
      y: this.yActualPosition,
    })
      ? this.xActualPosition - 1
      : this.yActualPosition;

    this.sidePosition = "left";
  }

  get moveRight() {
    this.xActualPosition = Map.canMove({
      x: this.xActualPosition + 1,
      y: this.yActualPosition,
    })
      ? this.xActualPosition + 1
      : this.yActualPosition;

    this.sidePosition = "right";
  }

  get moveUp() {
    this.yActualPosition = Map.canMove({
      x: this.xActualPosition,
      y: this.yActualPosition - 1,
    })
      ? this.yActualPosition - 1
      : this.yActualPosition;

    this.sidePosition = "up";
  }

  get moveDown() {
    this.yActualPosition = Map.canMove({
      x: this.xActualPosition,
      y: this.yActualPosition + 1,
    })
      ? this.yActualPosition + 1
      : this.yActualPosition;

    this.sidePosition = "down";
  }
}
