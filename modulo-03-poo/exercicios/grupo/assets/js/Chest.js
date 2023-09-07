import { Entity } from "./Entity";
import { Blessing } from "./Blessing";
import { Curse } from "./Curse";

export class Chest extends Entity {
    static #positiveOutcomeRate = 75/100;

    #treasure;
    #open;

    constructor() {
        super()
        this.#treasure = (Math.random() < Chest.#positiveOutcomeRate)? new Blessing() : new Curse();
        this.#open = false;
    }

    give(player) {
        this.#treasure.give(player);
        this.#open = true;
    }
}