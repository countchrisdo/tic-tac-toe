console.log("Code running");

/*----- constants -----*/

const TOTALSPACES = 9;


/*----- app's state (variables) -----*/

let usedSpaces = 0;
let remainingSpaces = TOTALSPACES - usedSpaces;
let gameStatus; // null, "win1", "win2"
let testVarStr = "test!";
let testVarNum = 10;

/*----- cached element references -----*/


const buttonEl = document.getElementById("replay");
const msgEl = document.getElementById("msg");

/*----- event listeners -----*/

document.querySelector("section").addEventListener("click", handleSquareClick);
document.getElementById("replay").addEventListener("click", init);

/*----- functions -----*/

init();

function init() {
    //rng
    const randomIdx = Math.floor(Math.random() * testVarStr.length);
    
    gameStatus = null;
   
    render();
}

function render() {
    
    renderButtons();
    renderMessage();

    console.log("Render has run / Page Updated");
}

function renderButtons() {
    
}

function renderMessage() {
    //win message
    if (gameStatus === "win1") {
        msgEl.innerText = "Player 1 win"
    } else if (gameStatus === "win2") {
        msgEl.innerText = "Player 2 win"
    } else { 
    //state player's turn
    msgEl.innerHTML = `Player ${testVarStr} turn! <br> Good Luck!`
    }
}

function handleSquareClick(evt){
    //if not a button, do nothing
    if (evt.target.tagName !== "BUTTON") return;
    //if not in game, do nothing??
    if (gameStatus) return;

    const testVar = evt.target.textContent;
    console.log(testVar);
    
    gameStatus = getGameStatus();
    console.log(gameStatus);
    render();
}

// null, "win1, "win2"
function getGameStatus() {
    if (testVar === testVar) return "win1";
    if (testVar === testVar) return "win2";
    return null;
}

console.log("End of the line: Code Ran");