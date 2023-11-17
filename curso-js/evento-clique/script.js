function clicou(){
    const teste = document.querySelector("#teste");
    const p = teste.querySelector("p");
// innerHTML: altera um elemento interno do HTML
    p.innerHTML = "<p>Texto 456</p>";

// children[0].append: adiciona algo após o elemento selecionado
// Forma alternativa: p.children[0].innerHTML += " (alterado)";
    p.children[0].append(" (alterado)");

// adiciona novo elemento
// Forma alternativa: p.innerHTML += "<p>Texto 789</p>";
    let newText = document.createElement("p");
    newText.innerText = "Texto 789";

    p.appendChild(newText);
}