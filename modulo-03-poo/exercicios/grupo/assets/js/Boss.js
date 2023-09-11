import { Mob } from "./Mob";
import { Map } from "./Map";
import { Blessing } from "./Blessing";

export class Boss extends Mob {
    static #names = [
        "Sir Drakenhart the Ruthless", "Morgana the Shadow Queen", "Gorgon the Stone-Eyed", "Thunderskull the Barbaric",
        "Seraphis the Fallen Angel", "Elzira the Necromancer", "Uldren the Unyielding", "Balzathor, Lord of Abyss",
        "Grimwald the Ghost Knight", "Vaelora the Enchantress", "Alaric the Dragon Rider", "Solanum the Plague Bringer",
        "Zephyra, Mistress of Winds", "Argus the Fire Elemental", "Khorath the Demon Hunter", "Terris the Earthshaker",
        "Ozymandias the Eternal", "Freyra, Priestess of the Moon", "Nighthawk the Dark Archer", "Caligo, Master of Illusions",
        "Lycaon the Werewolf King", "Quillthorn the Beastmaster", "Serenity the Banshee", "Brimstone the Infernal",
        "Lady Lorelei of the Lake", "Vortigern the Warlock", "Argentum, Guardian of the Silver Tower",
        "Voracity the Gluttonous", "Wightlord Elden", "Kael the Unforgiving", "Lunara the Sorceress of Nightfall",
        "Angron the Berserker", "Ysera, Mistress of Frost", "Oblivion, the Black Dragon", "Torunn the Thunder God",
        "Xylox the Sorcerer King", "Ragnar the Frost Giant", "Ophidia the Serpent Queen", "Eclipsa the Shadowmancer",
        "Valeria, the Valkyrie General", "Sableclaw the Griffon Rider", "Maelstrom, Lord of the Sea", "Ironclad the Golem Master",
        "Thanatos the Reaper", "Nyx, Keeper of Secrets", "Magus the Timebender", "Ebonflame the Pyromancer",
        "Faustus the Alchemist", "Tenebris the Nightstalker", "Aurum the Golden Knight"
    ]

    #traits

    constructor(x, y) {
        super({ name: Boss.#getRandomBossName(), isVisible: true, xActualPosition: x, yActualPosition: y });
        if (!Map.isPositionValid({ x, y })) {
            throw new Error("Invalid coordinates passed during Boss initialization.")
        }
        this.xActualPosition = x;
        this.yActualPosition = y;
    }

    init() {
        super.init()
        Boss.#addBlessings(this);
    }

    static #getRandomBossName() {
        const randomIndex = Math.floor(Math.random() * Boss.#names.length);
        return Boss.#names[randomIndex];
    }

    static #addBlessings(boss) {
        for (let i = 0; i < Map.difficult.bossBlessingNumber; i++) {
            new Blessing().give(boss);
        }
    }

    get traits() {
        return this.#traits;
    }
}