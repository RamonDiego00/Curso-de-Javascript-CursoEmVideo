var num = document.getElementById('txtn')
var tab = document.getElementById('selnum')
var res = document.querySelector ('div#res')
var valores = []

function Numeros(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
       return true 
    }else {
        return false 
    }
}

function intab(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function Analisar() {
    if(Numeros(num.value) && !intab(num.value,valores)) {
      valores.push(Number(num.value))
      var item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado.`
      tab.appendChild(item)
      res.innerHTML = ''
    }else  {
        window.alert('O valor é inválido ou já foi encontrado na lista')
        }
        num.value = ''/*Pra deixar em branco a barra*/ 
        num.focus()
    }
    function finalizar() {
        if (valores.length == 0) {
            windon.alert('Adicione valores antes de finalizar')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0 
            for(let pos in valores) {
                soma += valores[pos]
                 if (valores[pos]> maior )
                    maior = valores[pos]
                if (valores[pos]< menor)
                    menor = valores[pos] 
            }
            media = soma/ tot
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo,temos ${tot} números cadastrados</p>`
            res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
        }
    }