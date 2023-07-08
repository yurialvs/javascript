function contar() {
    var ini = document.getElementById('txti').value;
    var fim = document.getElementById('txtf').value;
    var passo = document.getElementById('txtp').value;
    var res = document.getElementById('res');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contador: <br>';
        var i = Number(ini);
        var f = Number(fim);
        var p = Number(passo);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            // Contador crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            // Contador regressivo
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
