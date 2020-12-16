function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes() //no do prof n tem isso eu fiz e gostei
    var dtn = window.document.getElementById('dtn')// eu fiz sozinho
    msg.innerHTML = `Agora são exatamente  ${hora}:${minutos} horas.`
    if (hora >= 0  && hora < 12){
        // BOM DIA!!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        dtn.innerHTML = 'BOM DIA!'
    }else if (hora >= 12 && hora <=18){
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        dtn.innerHTML = 'BOA TARDE!'
    }else{
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        dtn.innerHTML = 'BOA NOITE!'
    }
}
