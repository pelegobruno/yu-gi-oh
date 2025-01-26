//codigo avancar
// Passo 1: Pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// Passo 2: Identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    // Verificar se o último cartão já está selecionado
    if (cartaoAtual === cartoes.length - 1) return;

    // Passo 4: Esconder o cartão que está atualmente selecionado
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Passo 3: Mostrar o próximo cartão na lista
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});


//codigo voltar
const btnVoltar = document.getElementById("btn-voltar");

// Adicionar evento de clique ao botão de voltar
btnVoltar.addEventListener("click", function () {
    // Verificar se o primeiro cartão já está selecionado
    if (cartaoAtual === 0) return;

    // Esconder o cartão atualmente selecionado
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Ir para o cartão anterior
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});
