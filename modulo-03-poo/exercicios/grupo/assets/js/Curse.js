import { Fate } from "./Fate.js";
import { Trait } from "./Trait.js";

export class Curse extends Fate {
    constructor() {
        super(new Trait(false));
    }
}