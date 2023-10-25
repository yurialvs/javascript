/*
let idade = 20;

if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto.")
    }
}
*/

// Usando && 
let idade = 20;
if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
}

// Usando ||
let nome = "lopes";
if (nome == "yuri" || nome == "alves") {
    console.log("Nome correto!");
} else {
    console.log("Nome incorreto!")
}
