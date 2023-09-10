import { Entity } from "./Entity";
import { Blessing } from "./Blessing";
import { Curse } from "./Curse";
import { Map } from "./Map";

export class Chest extends Entity {
    #treasure;
    #open;

    constructor(x, y) {
        super()
        this.#treasure = (Math.random() <  Map.difficult.positiveLootOutcomePercentChance / 100)? new Blessing() : new Curse();
        this.#open = false;

        if (Map.isPositionValid({ x, y })) {
            this.xActualPosition = x;
            this.yActualPosition = y;
            Map.addEntityToMappedEntities(this);
        }
    }

    give(player) {
        this.#treasure.give(player);
        this.#open = true;
    }
}