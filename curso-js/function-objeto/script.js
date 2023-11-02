let pessoa = {
    nome: "Yuri",
    sobrenome: "Alves",
    idade: 27,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());
