function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora <= 9) {
        img.src = 'manha.png'
        document.body.style.background = '#ffb551'
        // BOM DIA!
        
    } else if (hora >= 10 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#2479ba'
        // BOA TARDE!

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#18212a'
        // BOA NOITE!
    }
}
