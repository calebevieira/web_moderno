class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Instanciando um objeto da classe Pessoa
  const pessoa1 = new Pessoa('Alice', 30);
  
  // Usando o método apresentar da instância
  pessoa1.apresentar();
  