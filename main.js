const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for(let i=0; i <  botões.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add(“ativo”);
}
for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}<p class="numero impar">1</p>
<p class="numero impar">2</p>
<p class="numero impar">3</p>
<p class="texto">Este é o primeiro parágrafo.</p>
<p class="texto">Este é o segundo parágrafo.</p>
<p class="texto">Este é o terceiro parágrafo.</p>
