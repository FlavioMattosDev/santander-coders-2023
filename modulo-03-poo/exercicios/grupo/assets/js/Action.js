export class Action {
    #attacker
    #move
    #description

    get attacker() { return this.#attacker; }
    set attacker(attacker) { this.#attacker = attacker; }

    get move() { return this.#move; }
    set move(move) { this.#move = move; }

    get description() { return this.#description; }
    set description(description) { this.#description = description; }

}