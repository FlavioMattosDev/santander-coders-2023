## Mapa - Alan

### Propriedades
- Determinar locais onde é possível andar.
- Armazenamento de posição atual dos personagens(npc, usuário, mob invisível, mob visível, boss, etc)
- Dificuldade: easy | medium | hard | extra-hard
40%

### Ações
- Ser possível modificar um local que está como 1, para 0 (x, y)
- Ser possível modificar um local que está como 0, para 1 (x, y)

## Entity - Alan
* Possui comportamentos e propriedades para serem reaproveitadas.

### Propriedades
- name: string
- xActualPosition
- yActualPosition
- sidePosition: down | left | right | up

### Ações
- Mover-se (cima, direita, baixo, esquerda) obs.: x e y
- Mudar o sidePosition: down | left | right | up

## Battle - Jéssica

### Propriedades

### Ações
- Adicionar opção de fugir da luta.

## NPC - José Flávio
* Estende por padrão a classe Entity.

## Player - Leandro
* Estende por padrão a classe Entity.

### Propriedades
- Vida Atual
- Vida Máxima
- Ataque
- Defesa

### Ações
- Ao iniciar o jogo, escolher o nome do personagem.
- Ao iniciar o jogo, escolher o personagem (imagem).


## Mob - Anderson Junior
* Estende por padrão a classe Entity.

### Propriedades
- Vida: {
  min: number,
  max: number
}
- Ataque: {
  min: number,
  max: number
}
- Defesa: {
  min: number,
  max: number
}
- isVisible: boolean

### Ações
- Escolher Status Iniciais do mob, com aleatoriedade.

## Boss - Georg Matheus
* Estende por padrão a classe Entity.

## Box - Georg Matheus

### Traps

### Drops

