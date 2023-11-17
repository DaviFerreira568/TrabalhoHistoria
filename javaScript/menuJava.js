document.addEventListener("DOMContentLoaded", function () {
    const ativarBotao = document.getElementById("ativar-botao");
    const menu = document.querySelector(".menu");
    const conteudoItens = document.querySelectorAll(".conteudoItem");

    ativarBotao.addEventListener("click", function () {
        menu.classList.toggle("menuAberto");
        for (const item of conteudoItens) {
            item.classList.toggle("centralizado");
        }
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !ativarBotao.contains(event.target)) {
            menu.classList.remove("menuAberto");
            for (const item of conteudoItens) {
                item.classList.remove("centralizado");
            }
        }
    });
});
