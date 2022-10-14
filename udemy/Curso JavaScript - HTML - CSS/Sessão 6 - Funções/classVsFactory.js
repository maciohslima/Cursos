//Class Constructor
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Jhon');
p1.falar();

//Constructor Function
function Person(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome eh ${this.nome}`);
    }
}

const person3 = new Person('Jhon');
person3.falar();

//Factory Function
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome eh ${nome}`)
    }
}

const p2 = criarPessoa('Jhon');
p2.falar();