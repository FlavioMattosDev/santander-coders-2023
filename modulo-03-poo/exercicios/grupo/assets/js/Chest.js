import {Entity} from "./Entity.js";
import {Blessing} from "./Blessing.js";
import {Curse} from "./Curse.js";
import {Map} from "./Map.js";

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
        }
    }

    init() {
        Map.addEntityToMappedEntities(this);
        this.render()
    }
    give(player) {
        this.#treasure.give(player);
        this.#open = true;
    }

    render(){
        const screenMap = document.querySelector('#map')
        const chest = document.createElement('div')
        const chestImage = document.createElement('img')
        chestImage.src = `../grupo/assets/images/icons/chest.png`
        chestImage.className = "absolute top-0 left-0"

        chest.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden`
        chest.appendChild(chestImage)

        screenMap.appendChild(chest)
    }
}