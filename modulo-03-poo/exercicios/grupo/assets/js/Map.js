export class Map {
  // - Determinar locais onde é possível andar.
  // x48
  #mapPositions = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [],
  ];
  #entitiesPosition = [
    {
      id: "",
      xPosition: 0,
      yPosition: 0,
    },
  ];
  #difficultSettings = {
    easy: {
      extraLife: 5,
      extraAttack: 5,
      extraDefense: 5,
      extraHitPercentChance: 40,
      extraDefensePercentChance: 40,
    },
    normal: {},
    hard: {},
    pro: {},
  };

  updateBlockPosition({ x, y, status }) {
    const existingPosition = this.isPositionValid({
      x,
      y,
    });

    if (!existingPosition) "posição do mapa não existe";

    switch (status) {
      case true:
        this.#mapPositions[x][y] = 1;
        break;
      default:
        this.#mapPositions[x][y] = 0;
        break;
    }
  }

  isPositionValid({ x, y }) {
    return !!this.#mapPositions[x][y];
  }

  addEntity({ id, y, x }) {
    const existingPosition = this.isPositionValid({
      x,
      y,
    });

    if (!existingPosition) "posição do mapa não existe";
  }

  #render() {
    const map = document.querySelector("#map");
    console.log(map);
  }

  render() {
    this.#render();
  }
  //   ### Propriedades
  // - Armazenamento de posição atual dos personagens(npc, usuário, mob invisível, mob visível, boss, etc)
  // - Dificuldade: easy | medium | hard | extra-hard
  // 40%
}
