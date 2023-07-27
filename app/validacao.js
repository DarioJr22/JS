function validacao(value){
    const numero = +value
    if(Number.isNaN(numero)){
        chute.innerHTML += '<div>Valor inválido</div>'
        return
    } 
    
    if ( valorPermitido(numero)){
        chute.innerHTML += `Valor inválido, precisa estar entre ${menorValor} e ${maiorValor}`;
        return
    }   

    console.log(numero,numeroSecreto);
    if (numero === numeroSecreto){
        document.body.innerHTML =
         `<h3>
         Você acertou
         </h3>
         <h2>
         O numero secreto era ${numeroSecreto}
         </h2>
         <button id="jogar-novamente" class="btn-jogar">Jogar !</button>
         `
    }  else if (numero > numeroSecreto) {
        chute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else{
        chute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } 
}

function valorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click',e=>{
    if(e.target.id =='jogar-novamente'){
        window.location.reload()
    }
})