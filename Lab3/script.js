function ResetBoard(){
    location.reload();
}

function HumanPlayer(){
    document.turn = "X";
    //let playerWon = GameStatus(score);
    //if(playerWon) EndGame(playerWon);
} 

function AiPlayer(){
    document.turn = "O";
}

function MakeNextMove(cell){
    cell.innerText = document.turn;
}

// function GameStatus(score, object){
//     let turn = score.reduce(acc, elem, index)
//     if(elem === playerWon)
//     {
//         acc.concat(i);
//     }
//     else{
//         acc, [];
//     }

//     let gameWon = null;

//     for(let [index, win] of board.entries()){
//         if(win.every(elem => turn.indexOf(elem > -1)))
//     {
//         gameWon = {index:index, player:player};
//         break;
//     }
//     return gameWon;
// }


//var score = Array.from(Array(9).keys());

var board =[
    [4],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]