// Elementos
const input = document.querySelector("input");
const lista = document.querySelector("ul");

//Funções
function handleKeyUp(e) {
   if(e.key === "Enter") {
        // Adiciona elemento "li" na lista
        const newLi = document.createElement("li");
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        //Limpa o campo de texto
        input.value = "";
   } 
}

//Eventos
input.addEventListener("keyup", handleKeyUp);