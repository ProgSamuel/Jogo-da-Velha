let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll(".cell");
const currentPlayerDisplay = document.getElementById("current-player");
const scoreXDisplay = document.getElementById("scoreX");
const scoreODisplay = document.getElementById("scoreO");
const scoreDrawDisplay = document.getElementById("scoreDraw");
// const turnDisplay = document.getElementById("turn")

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        cells[cellIndex].classList.add("filled");
        if (checkWin()) {
            updateScore();
            gameActive = false;
            currentPlayerDisplay.textContent = "The winner was: " + currentPlayer;
        } else if (board.indexOf("") === -1) {
            gameActive = false;
            currentPlayerDisplay.textContent = "Draw!";
            scoreDraw++;
            scoreDrawDisplay.textContent = scoreDraw;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            currentPlayerDisplay.textContent = currentPlayer;
        }
    }
}

function checkWin() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function updateScore() {
    currentPlayer === "X"?(scoreX++, scoreXDisplay.textContent = scoreX):(scoreO++,scoreODisplay.textContent = scoreO)
    
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayerDisplay.textContent = currentPlayer;
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("filled");
    });
}

function resetScore() {
    scoreX = 0;
    scoreO = 0;
    scoreDraw = 0;
    scoreXDisplay.textContent = scoreX;
    scoreODisplay.textContent = scoreO;
    scoreDrawDisplay.textContent = scoreDraw;
}

resetGame();
