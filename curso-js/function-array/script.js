let fruits = ["Morango", "Uva", "Laranja", "Banana"];

// join: adiciona qualquer digito entre os itens do array, porém não modifica o array em sí
console.log(fruits.join(" -> "));

// Renomeia o item[0]
fruits[0] = "Pitanga";

// Renomeia o último
fruits[fruits.length - 1] = "Pêra";

console.log(fruits);