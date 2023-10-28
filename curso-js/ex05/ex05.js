/*
Crie uma função que valide usuário e senha.
Usuário correto: yuri
Senha correta: 123

Uso da função:
let usuario = "fulano";
let senha = "1234";
let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso CONCEDIDO.");
} else {
    console.log("Acesso NEGADO!");
}
*/

function validar(usuario, senha) {
    if (usuario === "yuri" && senha === "123") {
        return true;
    } else {
        return false;
    }
}

let usuario = "yuri";
let senha = "123";
let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso CONCEDIDO.");
} else {
    console.log("Acesso NEGADO!");
}