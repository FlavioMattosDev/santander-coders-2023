export class Map {
  // - Determinar locais onde é possível andar.
  // x51
  // y30
  // 871
  // 564
  #mapPositions = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
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

  addEntity({ id, y, x }) {
    const existingPosition = this.isPositionValid({
      x,
      y,
    });

    if (!existingPosition) "posição do mapa não existe";
  }

  canMove({x, y}){
    
  }

  isPositionValid({ x, y }) {
    return !!this.#mapPositions[x][y];
  }

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
