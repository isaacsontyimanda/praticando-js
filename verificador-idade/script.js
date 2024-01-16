function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let txtano = document.getElementById('txtano')
    let res = document.querySelector('div#result')
    if (txtano.value == 0 || txtano.value > ano) {
        alert('[ERRO] ano inválido, verifique seus dados e tente novamente...')
    }
    else {
        let img = document.createElement('img')
        let fsex = document.getElementsByName('radsex')
        let idade = Number(ano - txtano.value)
        let gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menino.png')
            }
        else if (idade >= 11 && idade < 30) {
                //Adolescente
                img.setAttribute('src', 'img/homem-jovem.png')
        }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menina.png')
            }
        else if (idade >= 11 && idade < 30) {
                //Adolescente
                img.setAttribute('src', 'img/mulher-jovem.png')
        }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}