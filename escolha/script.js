function escolha(){
    // Obtenha os valores dos inputs
    var opcao1 = document.getElementById("input1").value;
    var opcao2 = document.getElementById("input2").value;

    // Gere um número aleatório entre 0 e 1
    var numeroAleatorio = Math.random();

    // Com base no número gerado, escolha uma das opções
    var opcaoEscolhida = numeroAleatorio < 0.5 ? opcao1 : opcao2;

    // Exiba o resultado
    document.getElementById("resultado").innerText = "Opção Escolhida: " + opcaoEscolhida;
}