import { Fate } from "./Fate.js";
import { Trait } from "./Trait.js";

export class Blessing extends Fate {
    constructor() {
        super(new Trait(true));
    }
}