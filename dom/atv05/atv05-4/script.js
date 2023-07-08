function tabuada() {
    var num = document.getElementById('txtn').value;
    var tab = document.getElementById('seltab');
    if (num.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        var n = Number(num);
        var c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            var item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}
