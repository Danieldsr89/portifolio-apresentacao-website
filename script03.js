function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique as informações e tente novamente !')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero =''
       var img = document.createElement('img')
       img.setAttribute ('id','foto')
       if(fsex[0].checked){
            gênero='Homem'
            if(idade >= 0 && idade <10) {
                // criança 
                img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/bebeMenino.png')
                res.innerHTML=`Criança do gênero ${gênero} com idade de ${idade}`
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','/portifolio-apresentacao-website/imagens-exe03/homemjovem.png')
                res.innerHTML=`Jovem do gênero ${gênero} com idade de ${idade}`
            }else if(idade <50){  
                img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/homem.png')
                res.innerHTML=`foi detectado um ${gênero} com idade de ${idade}`  

            }else {
                //idoso
                img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/homemIdoso.png')
                res.innerHTML=`Idoso do gênero ${gênero} com idade de ${idade}`
            }

       }else if (fsex[1].checked){
        gênero='Mulher'
        if(idade >= 0 && idade < 10) {
            // criança
            img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/bebeMenina.png')
            res.innerHTML=`Criança do gênero ${gênero} com idade de ${idade}`
        }else if(idade <21) {
            //jovem
            img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/mulherjovem.png')
            res.innerHTML=`Jovem do gênero ${gênero} com idade de ${idade}`
        }else if(idade <50) {
            //adulto
            img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/Mulher.png')
            res.innerHTML=`foi detectado uma ${gênero} com idade de ${idade}`
        }else {
            //idoso
            img.setAttribute('src', '/portifolio-apresentacao-website/imagens-exe03/mulherIdosa.png')
            res.innerHTML=`Idosa do gênero ${gênero} com idade de ${idade}`
        }

       }
        res.appendChild(img)

    }


}

