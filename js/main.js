/*----- constants -----*/

const TOTALTURNS = 9;
const WINCONDX = "XXX";
const WINCONDO = "OOO";

/*----- app's state (variables) -----*/

let gameStatus = "inGame"
let playerTurn = "X";
let turnsTaken = 0;

/*----- cached element references -----*/

const replayEl = document.getElementById("replay");
const squares = document.querySelectorAll("div input");
const msgEl = document.getElementById("msg");



/*----- event listeners -----*/

document.querySelector("div").addEventListener("click", handleSquareClick);
document.getElementById("replay").addEventListener("click", init);

/*----- functions -----*/

init();

function init() {
    //rng to find 1st player (come back to this)
    const randomIdx = Math.floor(Math.random() * 2);
    
    turnsTaken = 0;
    gameStatus = "inGame";
    
    console.log("Squares Length: " + squares.length);
    for (let i = 0; i < squares.length; i++) {
        squares[i].value = "";
    }

    render();

    console.log("Initial Game Status: " + gameStatus);
    console.log("Variable's Reset/Game Started");
    console.log("Player 1 will be: " + playerTurn);
}

function render() {
    
    renderSquares();
    renderMessage();

    //only show replay button at the end of the game

    if(gameStatus == "inGame") {replayEl.style.visibility = "hidden"} else { replayEl.style.visibility = "visible"};

    console.log("Render has run / Page Updated");
}

function renderSquares() {
    squares.forEach(function(sqr) {
        const tile = sqr.innerText;
        if(tile == "X"){
            sqr.disabled;
            sqr.className = "X";
        } else if (tile == "O"){
            sqr.disabled;
            sqr.className = "O"; 
        } else {
            sqr.className = "empty"
        }
        })
    }

function renderMessage() {
    //win message
    if (gameStatus == "winX") {
        msgEl.innerText = "Player X wins"
    } else if (gameStatus == "winO") {
        msgEl.innerText = "Player O wins"
    } else if (gameStatus == "winT") {
        msgEl.innerText = "TIE GAME"
    } else { 
        //state player's turn
        msgEl.innerHTML = `Player ${playerTurn}'s turn! <br> Good Luck!`
    }
}

function handleSquareClick(evt){
    //if turn count is too high, tie game do nothing
    if (turnsTaken == TOTALTURNS) {
        gameStatus = "winT"
        //getGameStatus();
        render();
        return;
    }

    //if not a button, do nothing
    if (evt.target.tagName !== "INPUT") return;

    //Tic Tac Logic / actions

    //if square is full, do nothing. if empty, log X/O
    if(evt.target.value !== "" ){
        console.log("Square is full, try again");
        return;
    } else {
        evt.target.value = `${playerTurn}`;
    };
    
    playerTurn == "X" ? playerTurn = "O" : playerTurn = "X";
    
    turnsTaken ++;
    getGameStatus();
    
    console.log("Player Turn: " + playerTurn);
    
    render();
}

// null, "winX, "winO", "winT"
function getGameStatus() {
    console.log("TurnsTaken: " + turnsTaken);
    
    if (turnsTaken == TOTALTURNS){
        console.log("Game Status after Game Status Check: " + gameStatus);
        return "winT"
    }

    //Checking Winner 
    if(turnsTaken >= 3){

        let topRowCount = squares[0].value.length + squares[1].value.length + squares[2].value.length;
        let midRowCount = squares[3].value.length + squares[4].value.length + squares[5].value.length;
        let botRowCount = squares[6].value.length + squares[7].value.length + squares[8].value.length;
        let leftColCount = squares[0].value.length + squares[3].value.length + squares[6].value.length;
        let midColCount = squares[1].value.length + squares[4].value.length + squares[7].value.length;
        let rightColCount = squares[2].value.length + squares[5].value.length + squares[8].value.length;
        let diagCount = squares[0].value.length + squares[2].value.length + squares[4].value.length + squares[6].value.length + squares[8].value.length;
        
    //top row
    
    if ( topRowCount== 3 ) {   
        console.log("Top ROW RAN")

        if (squares[0].value + squares[1].value + squares[2].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[0].value + squares[1].value + squares[2].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}
    //middle row
    
    if ( midRowCount== 3){
        
        if (squares[3].value + squares[4].value + squares[5].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[3].value + squares[4].value + squares[5].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}
    //bottom row
    
    if (botRowCount == 3){ 
        if (squares[6].value + squares[7].value + squares[8].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[6].value + squares[7].value + squares[8].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}  
    //left col
    
    if (leftColCount == 3){
        if (squares[0].value + squares[3].value + squares[6].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[0].value + squares[3].value + squares[6].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}
    //mid col
    
    if (midColCount == 3){
        if (squares[1].value + squares[4].value + squares[7].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[1].value + squares[4].value + squares[7].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}
    //bottom coll
    
    if (rightColCount == 3){
        if (squares[2].value + squares[5].value + squares[8].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[2].value + squares[5].value + squares[8].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        }}
    //diag
    
    if (diagCount >= 3){
        if (squares[0].value + squares[4].value + squares[8].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[0].value + squares[4].value + squares[8].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO";
        } else if (squares[2].value + squares[4].value + squares[6].value == WINCONDX){
            console.log("X IS THE WINNER");
            return gameStatus = "winX";
        } else if (squares[2].value + squares[4].value + squares[6].value == WINCONDO){
            console.log("O IS THE WINNER");
            return gameStatus = "winO"; 
        }}
        //tie game
        else if (topRowCount + botRowCount + midRowCount == 9){
            return gameStatus = "winT"};
        return gameStatus = "inGame";
    }  else if (turnsTaken == 9){
        gameStatus = "winT";
    } else {
        gameStatus = "inGame";
    }
    
    console.log("Game Status after Game Status Check: " + gameStatus);
    
}
gameStatus = getGameStatus();

if(turnsTaken >= "8"){
    getGameStatus();
    render();
}

console.log("-----------");