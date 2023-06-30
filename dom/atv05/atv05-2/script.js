function verificar(){
    var data = new Date() // Data atual
    var ano = data.getFullYear() //4 digitos do ano
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-masc.png')
            } else if (idade >= 10 && idade < 50) {
                // Jovem
                img.setAttribute('src', 'jovem-masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-masc.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-fem.png')
            } else if (idade >= 10 && idade < 50) {
                // Jovem
                img.setAttribute('src', 'jovem-fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}