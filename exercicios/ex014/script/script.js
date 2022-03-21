function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/Manha.png'
        document.body.style.background = '#adabb8'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#7c95a8'
    } else {
        //Boa noite
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#1d313a'
    }
}