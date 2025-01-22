document.addEventListener( 'DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() => {
            alert(" O Jogo acabou - O vencedor foi " + playerTime);
        }, 10);
    };
    updateSquare(position);

}

function updateSquare(position){
    let square = document.getElementById(position.toString());

    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

/*function apagaTudo (){
//tentar gerar outra funcao nesse espaço aqui!




}

var botao = document.querySelector("button");
botao.onclick = apagaTudo;

//terminar depois essa função!!
function onclick (){
    //funcao vai buscar todos os icones clicados após vencer o game ou antes se quiser apagadar o jogo realizado até então!
    let squares = documento.getElementById(position.querySelectorAll(".square"));

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = " ";
        }
        return true;
    })
    //Condição que restaurará todos os itens pra versao de inicio com todos os quadrados apagados
}*/