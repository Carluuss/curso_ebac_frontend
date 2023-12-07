document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();

    let campoA = document.getElementById('campoA');
    let campoB = document.getElementById('campoB');
    let mensagem = document.getElementById('mensagem');
    
    if(campoB.value > campoA.value){
    mensagem.innerHTML = 'Você está valido!!'
    mensagem.style.color = 'green';
    mensagem.style.fontWeight = 'bold';
    campoB.value ='';
    campoA.value ='';
}else{
    mensagem.innerHTML = 'Você está invalido!'
    mensagem.style.color = 'red';
    mensagem.style.fontWeight = 'bold';
    campoA.style.color = 'red';    
    campoB.style.color = 'red';
}
})
