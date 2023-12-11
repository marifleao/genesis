let order = [];
let clickedOrder = [];
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
let shuffleOrder = () => {
    //Sorteia a cor de 0 a 3
    let colorOrder = Math.floor(Math.random() * 4);
    //Atribuir o index com a cor sorteada
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//Acender a cor sorteada
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se a ordem de cliques é a mesma criada pelo jogo
let checkOrder = () =>{
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}!\n Você acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor
let createColorElement = (color) =>{
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
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para o Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função para iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Genesis!\nIniciando um novo jogo!');
    score = 0;

    nextLevel();
}

//Ativar o clique das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
playGame();
