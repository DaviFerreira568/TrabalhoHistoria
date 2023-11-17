var backgroundImage = document.getElementById('imagemFantasma');
var texto = document.querySelector(".caixaTextoIntroduçao");
var botaoVerNovamente = document.querySelector('.botaoVerNovamente');
var subtituloIntroduçao = document.querySelector('.subtituloIntroduçao');

function removerImagem() {
    backgroundImage.style.display = 'none';
    texto.style.display = 'flex';
    botaoVerNovamente.style.display = 'flex';
    subtituloIntroduçao.style.display = 'flex';
}

function reverImagem(){
    backgroundImage.style.display = 'flex';
    texto.style.display = 'none';
    botaoVerNovamente.style.display = 'none';
    subtituloIntroduçao.style.display = 'none';

    setTimeout(removerImagem, 5000);
}

setTimeout(removerImagem, 0);