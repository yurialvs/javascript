function clicou(){
    const input = document.querySelector("#teste");

    // Verifica se exite um atributo "placeholder"
    if(input.hasAttribute("placeholder")){
        console.log("Tem placeholder sim");
    } else {
        console.log("Não tem placeholder");
    }
    
    // Altera o atributo
    input.setAttribute("placeholder", "Placeholder alterado");
}

// Mostra e oculta senha
function mostra(){
    const input = document.querySelector("#senha");
    const botao = document.querySelector("#botao2");

    // Altera os atributos e texto dentro do botão
    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        botao.innerText = "Mostrar senha";
    } else {
        input.setAttribute("type", "text");
        botao.innerText = "Ocultar senha";
    }
}