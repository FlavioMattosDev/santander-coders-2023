import { Fate } from "./Fate";
import { Trait } from "./Trait";

export class Curse extends Fate {
    constructor() {
        super(new Trait(false));
    }
}