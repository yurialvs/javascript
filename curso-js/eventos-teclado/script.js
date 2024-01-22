/* 
function apertou() {
    console.log("APERTOU");
}

function segurou() {
    console.log("SEGUROU");
}
*/

function soltou() {
    console.log("SOLTOU");
} 

const input = document.querySelector("input");
input.addEventListener("keyup", soltou);