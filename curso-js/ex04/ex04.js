/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quarto, o m2 é 1.2x
- Se tiver 3 quarto, o m2 é 1.5x

Uso da função:
let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    
    switch(quartos) {
        case 1:
        default:
            preco = metragem * (m2 * 1);
            break;

        case 2:
            preco = metragem * (m2 * 1.2);
            break;

        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
}

let metragem = 123;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);


