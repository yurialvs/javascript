let fruits = ["Banana", "Uva", "Laranja", "Limão"];

// Filtra as arrays com item com mais de 4 letras
let bigFruits = fruits.filter((item) => {
    return item.length > 4;
});

console.log(bigFruits);

// Verifica se todas palavras tem mais de 3 letras
let ok = fruits.every((value) => {
    return value.length > 3;
});

console.log(ok);

// Verifica se algumas palavras tem mais de 3 letras
let teste = fruits.some((value) => {
    return value.length > 3;
});

console.log(teste);

// Verifica se há uva
if(fruits.includes("Uva")) {
    console.log("Tem uva.");
} else {
    console.log("Não tem uva.");
}