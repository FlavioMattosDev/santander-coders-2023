class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  cumprimento(){
    return 'Olá';
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade){
    super(nome, idade);
  }
  cumprimento(){
    return 'Olá professor!'
  }
}

class Professor extends Pessoa {
  constructor(nome, idade){
    super(nome, idade);
  }
  cumprimento(){
    return 'Olá Aluno!'
  }
}