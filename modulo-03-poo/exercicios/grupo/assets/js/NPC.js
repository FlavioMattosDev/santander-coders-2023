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
			Map.addEntityToMappedEntities({
				x: xActualPosition,
				y: yActualPosition,
			});
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
			// console.log(
			// 	`${this.name} aumentou o ${statToBuff} de ${player.name} em ${buffValue}.`
			// );
		} else {
			const statToDebuff = Math.random() < 0.5 ? 'attack' : 'defense';
			const debuffValue = Math.floor(Math.random() * 3 + 1);
			this.#debuffs[statToDebuff] = debuffValue;
			player[statToDebuff] -= debuffValue;
			// console.log(
			// 	`${this.name} diminuiu o ${statToDebuff} de ${player.name} em ${debuffValue}.`
			// );
		}
	}
}

const npc1 = new Npc({
	name: 'Guarda da Cidade',
	xActualPosition: 10,
	yActualPosition: 5,
	dialoguePhrases: [
		'Cidadão, seja bem-vindo à nossa cidade.',
		'Mantenha-se seguro enquanto estiver aqui.',
		'Precisa de informações sobre a cidade? Estou à disposição.',
	],
});

const npc2 = new Npc({
	name: 'Ermitão',
	xActualPosition: 30,
	yActualPosition: 10,
	dialoguePhrases: [
		'Eu vivo nas montanhas há anos, longe das cidades.',
		'Aqui, a paz e a solidão são minhas únicas companheiras.',
		'Cuidado com as lendas que ecoam nestas terras antigas.',
	],
});

const npc3 = new Npc({
	name: 'Ferreiro',
	xActualPosition: 8,
	yActualPosition: 12,
	dialoguePhrases: [
		'Precisa de uma arma ou armadura? Você veio ao lugar certo.',
		'Minhas espadas são as melhores da região.',
	],
});

const npc4 = new Npc({
	name: 'Profeta',
	xActualPosition: 18,
	yActualPosition: 28,
	dialoguePhrases: [
		'Eu vejo seu futuro, viajante.',
		'Caminhos misteriosos se abrem diante de você.',
		'Mas cuidado com as escolhas que fizer no caminho.',
	],
});

const npc5 = new Npc({
	name: 'Feiticeiro',
	xActualPosition: 25,
	yActualPosition: 25,
	dialoguePhrases: [
		'Sinto as energias mágicas fluindo ao meu redor.',
		'Há rumores de um chefão nas proximidades, mas poucos sobreviveram para contar a história.',
		'Se deseja magia, saiba que ela tem seu preço.',
	],
});

// Aplicando o buff ou debuff ao jogador 
// npc2.applyRandomBuffOrDebuff(player); 
// npc4.applyRandomBuffOrDebuff(player);

// Exibindo o estado atual do jogador
// console.log(`${player.name}: Ataque - ${player.attack}, Defesa - ${player.defense}`);
