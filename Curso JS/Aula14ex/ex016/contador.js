function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res =window.document.getElementById('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0) {
         window.alert('Passo invalido!Considerando PASSO 1') 
         p = 1  
        }
        
        
        if (i< f) {
            //Contagem crescente
        for(var c = 1; c<= f; c += p ) {
            res.innerHTML += `${c} \u{1F9E0}`
        }
        res.innerHTML += `\u{1F645} \u{200D} \u{2642} \u{FE0F}`
    } else {
        //contagem regressiva 
        for(var c = i; c>=f; c -= p) {
            res.innerHTML += `${c}\u{1F9E0}`
        }
    }
    res.innerHTML += `\u{1F645} \u{200D} \u{2642} \u{FE0F}`
}
       
} 	