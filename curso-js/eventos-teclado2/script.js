/*
O .code mostra qual tecla foi apertada no console (ShiftLeft)
Pode ser usado o .key porém retorna simplificado (Shift)
.shiftKey .altKey .ctrlKey retornam um valor booleano
*/

function soltou(event) {
    console.log("TECLA APERTADA:" + event.code);
    console.log("SHIFT? " + event.shiftKey);
    console.log("--");
} 

const input = document.querySelector("input");
input.addEventListener("keyup", soltou);