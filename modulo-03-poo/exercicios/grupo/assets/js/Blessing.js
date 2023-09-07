import { Fate } from "./Fate";
import { Trait } from "./Trait";

export class Blessing extends Fate {
    constructor() {
        super(new Trait(true));
    }
}