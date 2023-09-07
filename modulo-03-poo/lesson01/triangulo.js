class Triangulo {
  constructor(ladoA, ladoB, ladoC) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  calcularPerimetro() {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  calcularArea() {
    const s = this.calcularPerimetro() / 2;
    return Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
  }
}

// Exemplo de uso
const ladoA = 5;
const ladoB = 6;
const ladoC = 7;

const meuTriangulo = new Triangulo(ladoA, ladoB, ladoC);
console.log("Perímetro:", meuTriangulo.calcularPerimetro());
console.log("Área:", meuTriangulo.calcularArea());