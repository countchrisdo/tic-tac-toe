/*----- constants -----*/

const TOTALSPACES = 9;
const TOTALTURNS = 9;

/*----- app's state (variables) -----*/

let usedSpaces = 0;
let remainingSpaces = TOTALSPACES - usedSpaces;

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
   // const randomIdx = Math.floor(Math.random() * 2);
    turnsTaken = 0;
    GameStatus = "inGame";
    render();

    console.log("Initial Game Status: " + gameStatus);
    console.log("Variable's Reset/Game Started");
    console.log("Player 1 Turn: " + playerTurn);
}

function render() {
    //only show button at the end of the game
    replayEl.style.visibility = gameStatus !== "inGame" ? "visible" : "hidden";
    
    renderSquares();
    renderMessage();

    console.log("Render has run / Page Updated");
}

function renderSquares() {
    squares.forEach(function(sqr) {
        const tile = sqr.innerText;
        if(tile === "X"){
            sqr.disabled;
            sqr.className = "X";
        } else if (tile === "O"){
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
        msgEl.innerText = "Player X win"
    } else if (gameStatus == "winO") {
        msgEl.innerText = "Player O win"
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
        getGameStatus();
        render();
        return;
    }

    //if not a button, do nothing
    if (evt.target.tagName !== "INPUT") return;
    
    //if not in game, do nothing??
    if (gameStatus == "winT") return;

    playerTurn == "X" ? playerTurn = "O" : playerTurn = "X";
    
    turnsTaken ++;
    getGameStatus();
    
    
    console.log("Player Turn: " + playerTurn);
    // console.log("Game Status after Click: " + gameStatus);

    // const testVar = evt.target.textContent;
    // console.log(testVar);
    
    render();
}

// null, "winX, "winO", "winT"
function getGameStatus() {
    console.log("TurnsTaken: " + turnsTaken);
    
    if (turnsTaken == TOTALTURNS){
        console.log("Game Status after Game Status Check: " + gameStatus);
        return "winT"
    }

    if (gameStatus == "winX") return "winX";
    if (gameStatus == "winO") return "winO";
    if (gameStatus == "winT") return "winT";
    console.log("Game Status after Game Status Check: " + gameStatus);
    return "inGame";
}
gameStatus = getGameStatus();

console.log("-----------");