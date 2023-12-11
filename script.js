let ordem = [];
let ordemCliquesUsuario = [];
let score = 0;

/*
    0 = Verde
    1 = Vermelho
    2 = Amarelo
    3 = Azul
*/

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//Função para criar a ordem da cor
let criarOrdem = () => {
    //Sorteia a cor de 0 a 3
    let ordemCores = Math.floor(Math.random() * 4);
    //Atribuir o index com a cor sorteada
    ordem[ordem.length] = ordemCores;
    ordemCliquesUsuario = [];

    for(let i in ordem){
        let elementColor = criarOrdemCores(ordem[i]);
        acendeCor(elementColor, Number(i) + 1);
    }
}
//Acender a cor sorteada
let acendeCor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se a ordem de cliques é a mesma criada pelo jogo
let checaOrdemCliques = () =>{
    for(let i in ordemCliquesUsuario) {
        if(ordemCliquesUsuario[i] != ordem[i]){
            fimJogo();
            break;
        }
    }
    if(ordemCliquesUsuario.length == ordem.length){
        alert(`Pontuação: ${score}!\n Você acertou! Iniciando o próximo nível!`);
        proximoNivel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    ordemCliquesUsuario[ordemCliquesUsuario.length] = color;
    criarOrdemCores(color).classList.add('selected');

    setTimeout(() => {
        criarOrdemCores(color).classList.remove('selected');
        checaOrdemCliques();
    },250);
}

//Função que retorna a cor
let criarOrdemCores = (color) =>{
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

//Funão para próximo Nível do jogo
let proximoNivel = () => {
    score++;
    criarOrdem();
}

//Função para o Game Over
let fimJogo = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para iniciar um novo jogo.`);
    ordem = [];
    ordemCliquesUsuario = [];

    inicioJogo();
}

//Função para iniciar o jogo
let inicioJogo = () => {
    alert('Bem vindo ao Genesis!\nIniciando um novo jogo!');
    score = 0;

    proximoNivel();
}

//Ativar o clique das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
inicioJogo();
