function clicou(){
    const item = document.querySelector("p");

    if (item.classList.contains("azul")){
        item.classList.remove("azul");
        item.classList.add("verde");
        /* simplificando:
        item.classList.replace("azul", "verde"); */
    } else {
        item.classList.remove("verde");
        item.classList.add("azul");
        /* simplificando:
        item.classList.replace("verde", "azul"); */
    }
}