import { Map } from "./Map.js";
import { Player } from "./Player.js";

const map = new Map();

console.log(Map.canMove({ x: 4, y: 3 }));

map.render();
