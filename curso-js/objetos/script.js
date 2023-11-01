let personagem = {
    nome: "Yuri",
    idade: 27,
    pais: "Brasil",
    roupa: ["preta", "branca"],
    habilidades: {
        magia: 40,
        forca: 85,
        defesa: 92
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}.`);

// Objeto dentro do obejto
console.log(`Força: ${personagem.habilidades.forca}.`);

// Array dentro do objeto
console.log(`Usa roupa ${personagem.roupa[0]}.`);

// Alterando propriedades dos objetos
personagem.pais = "Canadá";
console.log(personagem.pais);

personagem.habilidades.forca += 5;
console.log(`Força: ${personagem.habilidades.forca}`);

personagem.roupa.push("verde");
console.log(personagem.roupa);

// Acessando obejtos
let veiculos = {
    carros: [
        {modelo: "Fiat", cor: "azul"},
        {modelo: "Ferrari", cor: "vermelho"}
    ]
}

console.log(veiculos.carros[1].modelo);
