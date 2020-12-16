let valores = [5,7,6,8,4,9]
/*for(let pos = 0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
 for (let pos in valores){
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 }
 let pos = valores.indexOf(7)
 if( pos == -1){
    console.log('o valor não foi encontrado')
 }else{
    console.log(`o valor esta na posição ${pos}`)
 }