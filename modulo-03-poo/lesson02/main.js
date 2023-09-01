class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

}

class Cidadao extends Pessoa {
  constructor(nome, idade, cpf, rg) {
    super(nome, idade);
    this.cpf = cpf;
    this.rg = rg;
  }
}

class Empresa extends Pessoa {
  constructor(nome, idade, cnpj, im) {
    super(nome, idade);
    this.cnpj = cnpj;
    this.im = im;
  }
}

const p = new Cidadao('bruno', 30, 1234, 45566);

console.log(p instanceof Pessoa)
console.log(p instanceof Cidadao)
console.log(p instanceof Empresa)

class Conta {
  #numeroConta;
  constructor(nome, cpf){
    this.nome = nome
    this.cpf = cpf
    this.numeroConta = Utils.numeroConta();
  }
  get numeroConta() {
    return this.#numeroConta;
  }
  set numeroConta(numero) {
    this.#numeroConta = numero;
  }
}

class Utils {
  static totalContas = 0;
  constructor(){}

  static numeroConta() {
    return ++Utils.totalContas;
  }
}