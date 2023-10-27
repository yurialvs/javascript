/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100

Uso da função:
let x= 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}

let n1 = 250;
let n2 = 25;
let pct = calcPct(n1, n2);
console.log(`${pct}% de ${n1} é ${n2}`);
