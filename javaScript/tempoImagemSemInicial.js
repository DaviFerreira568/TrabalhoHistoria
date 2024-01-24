var backgroundImage = document.getElementById('imagemFantasma');
var texto = document.querySelector(".caixaTextoIntroduçao");
var botaoVerNovamente = document.querySelector('.botaoVerNovamente');
var subtituloIntroduçao = document.querySelector('.subtituloIntroduçao');

backgroundImage.addEventListener("click", ()=>{
    backgroundImage.style.display = 'none';
    texto.style.display = 'flex';
    botaoVerNovamente.style.display = 'flex';
    subtituloIntroduçao.style.display = 'flex';
})

function removerImagem() {
    backgroundImage.style.display = 'none';
    texto.style.display = 'flex';
    botaoVerNovamente.style.display = 'flex';
    subtituloIntroduçao.style.display = 'flex';
}



setTimeout(removerImagem, 0);