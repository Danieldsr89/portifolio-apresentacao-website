function iniciar()
{
    var verificarinicio = window.document.getElementById('inicio')
    var verificarfim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')   
    
    if(verificarinicio.value.length == 0 || verificarfim.value.length == 0 || passo.value.length == 0){
        res.innerHTML= '[Erro !]  Preencha os dados para continuar.'
    }
    else{
        res.innerHTML=' Contando: <br> '
        var  inicio = Number(verificarinicio.value)
        var fim = Number(verificarfim.value)
        var Vpasso = Number(passo.value)
    }
    if(Vpasso <=0){
        window.alert('Passo Inválido! Considerando Passo 1')
        Vpasso = 1
    } 
    if(inicio < fim){
        for(let n = 0; inicio<=fim; inicio = inicio + Vpasso){
            res.innerHTML += ` \u{1F449}  ${inicio}  \u{1F648} `
        }

    }else{
        for(let n = 0; inicio>=fim; inicio = inicio - Vpasso){
            res.innerHTML += ` \u{1F449}  ${inicio}  \u{1F648} `
        }
    }
    res.innerHTML +=`\u{1F3C6}`
   
}

