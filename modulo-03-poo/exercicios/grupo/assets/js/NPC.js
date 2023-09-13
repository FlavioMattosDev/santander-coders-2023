import { Entity } from './Entity.js';
import { Map } from './Map.js';

export class Npc extends Entity {
	#dialoguePhrases;
	#buffs;
	#debuffs;

	constructor({ name, xActualPosition, yActualPosition, dialoguePhrases }) {
		super();
		this.name = name;
		this.#dialoguePhrases = dialoguePhrases;
		this.#buffs = {};
		this.#debuffs = {};

		if (Map.isPositionValid({ x: xActualPosition, y: yActualPosition })) {
			this.xActualPosition = xActualPosition;
			this.yActualPosition = yActualPosition;

			Map.addEntityToMappedEntities(this);
			this.render();
		}
	}

	get dialoguePhrases() {
		return this.#dialoguePhrases;
	}

	set dialoguePhrases(phrases) {
		this.#dialoguePhrases = phrases;
	}

	getRandomDialogue() {
		const randomIndex = Math.floor(
			Math.random() * this.#dialoguePhrases.length
		);
		return this.#dialoguePhrases[randomIndex];
	}

	applyRandomBuffOrDebuff(player) {
		const isBuff = Math.random() < 0.5;

		if (isBuff) {
			const statToBuff = Math.random() < 0.5 ? 'attack' : 'defense';
			const buffValue = Math.floor(Math.random() * 3 + 1);
			this.#buffs[statToBuff] = buffValue;
			player[statToBuff] += buffValue;
		} else {
			const statToDebuff = Math.random() < 0.5 ? 'attack' : 'defense';
			const debuffValue = Math.floor(Math.random() * 3 + 1);
			this.#debuffs[statToDebuff] = debuffValue;
			player[statToDebuff] -= debuffValue;
		}
	}

	render() {
		const screenMap = document.querySelector('#map');
		const npc = document.createElement('div');
		const npcImage = document.createElement('img');
		const imageSource = `../grupo/assets/images/npc/silver-guard.png`;

		npcImage.src = imageSource;
		npcImage.className = 'absolute top-0 left-0';

		npc.className = `absolute top-[calc(${this.yActualPosition}*20px)] left-[calc(${this.xActualPosition}*20px)] w-5 h-5 overflow-hidden`;
		npc.appendChild(npcImage);

		screenMap.appendChild(npc);
	}
}

// const npc1 = new Npc({
// 	name: 'NPC 1',
// 	xActualPosition: 10,
// 	yActualPosition: 5,
// 	dialoguePhrases: [
// 		'Olá, viajante!',
// 		'Como posso ajudar você hoje?',
// 		'Tenha um bom dia!',
// 	],
// });

// const npc2 = new Npc({
// 	name: 'NPC 2',
// 	xActualPosition: 7,
// 	yActualPosition: 8,
// 	dialoguePhrases: [
// 		'Bem-vindo à cidade!',
// 		'Precisa de informações sobre os arredores?',
// 		'Fique à vontade para fazer perguntas.',
// 	],
// });

// npc1.render();
// npc2.render();
