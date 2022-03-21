function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById ('resultado')

    //O if abaixo verifica se o campo ano está com valor 0 e se tiver mostra mensagem de erro!
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique se os dados informados estão corretos e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homen'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    }
}