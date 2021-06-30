var agora =new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora< 12 && hora>1) {
   console.log('Bom dia!') 
}else if(hora<=18){
    console.log('Boa tarde!')
}else{(hora>18 && hora<23 )
    console.log ('Boa noite!')
}if (hora>23 || hora<=0){
    console.log('Boa madrugada!')
}