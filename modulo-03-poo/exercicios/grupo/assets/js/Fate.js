export class Fate {
    #gift;
    constructor(gift) {
        this.#gift = gift;
    }
    give(character) {
        this.#gift.apply(character)
    }
}