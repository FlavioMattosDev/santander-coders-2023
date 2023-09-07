import { Map } from "./Map.js";
import { Player } from "./Player.js";
import { Mob } from "./Mob.js";

const map = new Map();

console.log(map.mapSpots);
console.log(Map.isPositionValid({y: 25 , x: 15}))

map.render();
