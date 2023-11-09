let fruits = ["Banana", "Uva", "Laranja", "Limão"];

// Ordem alfabética crescente
fruits.sort();
console.log(fruits);

// Ordem alfabética decrescente
fruits.sort();
fruits.reverse(); // Apenas a function reverse, inverte a array
console.log(fruits);


// Ordem crescente por ano
let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "BMW", year: 2018},
    {brand: "Ferrari", year: 2020}
]

cars.sort((a, b) => a.year - b.year);

console.log(cars);
