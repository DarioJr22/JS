const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const chute = document.getElementById('chute')


recognition.lang = 'pt-br'
recognition.start()
recognition.addEventListener('result',onSpeak)
recognition.addEventListener('end', ()=> recognition.start())

function onSpeak(ev){
exibeChute(ev.results[0][0].transcript)
validacao(ev.results[0][0].transcript)
}

function comecar(){
    recognition.start()
}


function exibeChute(e) {
  
    chute.innerHTML =`
    <div>Você disse:</div>
        <span class="box">${e}</span>
      
    `
}