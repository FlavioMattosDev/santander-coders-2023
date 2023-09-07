import { Map as GameMap } from './Map'
import { Utils } from './Utils'

export class Trait {

    static #prefixesMap = new Map([
        [-6,"Crippling"],
        [-5,"Brutal"],
        [-4,"Vicious"],
        [-3,"Cruel"],
        [-2,"Harsh"],
        [-1,"Slight"],
        [1,"Minor"],
        [2,"Lesser"],
        [3,"Moderate"],
        [4,"Greater"],
        [5,"Major"],
        [6,"Supreme"]
    ]);
    static #minGoodPrefixKey = 1;
    static #maxGoodPrefixKey = Math.max(...Trait.#prefixesMap.keys());
    static #minBadPrefixKey = Math.min(...Trait.#prefixesMap.keys());
    static #maxBadPrefixKey = -1;

    static #suffixesMap = new Map([
        [-1, "Mortality"],
        [-2, "Feebleness"],
        [-3, "Frailty"],
        [1, "Longevity"],
        [2, "Might"],
        [3, "Fortification"],
    ]);
    static #minGoodSuffixKey = 1;
    static #maxGoodSuffixKey = Math.max(...Trait.#suffixesMap.keys());
    static #minBadSuffixKey = Math.min(...Trait.#suffixesMap.keys());
    static #maxBadSuffixKey = -1;

    static #suffixesToPropertyMap = new Map([
        ["Mortality", "maxLife"],
        ["Longevity", "maxLife"],
        ["Feebleness", "attack"],
        ["Might", "attack"],
        ["Frailty", "defense"],
        ["Fortification", "defense"]
    ])

    #description;
    #property;
    #effect;

    /**
     * Initialize a Trait instance.
     * @param {boolean} isPositive - Determines if the trait is good or bad.
     */
    constructor(isPositive) {
        const prefixKey = Trait.#getRandomPrefixKey(isPositive);
        const suffixKey = Trait.#getRandomSuffixKey(isPositive);

        this.#description = `${Trait.#prefixesMap.get(prefixKey)} ${Trait.#suffixesMap.get(suffixKey)}`;
        this.#property = Trait.#suffixesToPropertyMap.get(Trait.#suffixesMap.get(suffixKey));
        this.#effect = prefixKey * 3;
    }

    static #getRandomPrefixKey = (isPositive) =>
        Utils.getRandomKey(
            isPositive,
            Trait.#minGoodPrefixKey,
            Trait.#maxGoodPrefixKey,
            Trait.#minBadPrefixKey,
            Trait.#maxBadPrefixKey
        );

    static #getRandomSuffixKey = (isPositive) =>
        Utils.getRandomKey(
            isPositive,
            Trait.#minGoodSuffixKey,
            Trait.#maxGoodSuffixKey,
            Trait.#minBadSuffixKey,
            Trait.#maxBadSuffixKey
        );

    apply(character) {
        switch(this.#property) {
            case "maxLife":
                character.maxLife += this.#effect;
                break;
            case "attack":
                character.attack += this.#effect;
                break;
            case "defense":
                character.defense += this.#effect;
                break
        }
        character.traits.push(this);
        GameMap.update(character);
    }
}
