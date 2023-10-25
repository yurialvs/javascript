// IGUAL NORMAL

let idade1 = "50";
if (idade1 == 50) {
    console.log("Idade 1 é 50 anos.");
}
console.log(typeof idade1);

// IGUAL RESTRITO

let idade2 = "80";
if (idade2 === 80) {
    console.log("Idade 2 é 80 anos."); // Não retornará nenhuma resposta, pois a idade2 está associada a uma string, neste caso teria que ser exatamente igual para ter um retorno, tanto na escrita como no tipo da comparação que é um number.
}
console.log(typeof idade2);

let idade3 = "20";
if (idade3 === "20") {
    console.log("Idade 3 é 20 anos."); // Veja que desta vez retornou a resposta, pois é uma string na comparação.
}
console.log(typeof idade3);