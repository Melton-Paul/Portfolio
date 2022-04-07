

// Search Function

const searchInput = document.getElementById("searchInput");


searchInput.addEventListener("keyup", function(event){
    let search = event.target.value.toLowerCase();
    let allProjects = document.getElementsByClassName("project")
    for (let counter = 0; counter < allProjects.length; counter++){
        const currentItem = allProjects[counter].textContent.toLowerCase()
        if (currentItem.includes(search)) {
            allProjects[counter].style.display = "block"
        } else {
            allProjects[counter].style.display = "none"
        }
    }
});

// Dice Game
const turnMessage = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
hasGameFinished = false;


let player1 = 0;
let player2  = 0;
let player1Turn = true;

rollBtn.addEventListener("click", function(){
    if (hasGameFinished === false){
        if (player1Turn){
        let playerDice = randomNum();
        player1 += playerDice;
        player1Dice.textContent = playerDice;
        player2Dice.classList.remove("active-player");
        player1Dice.classList.add("active-player");
        player1Scoreboard.textContent = player1;
        player1Turn = false;
    } else {
        let playerDice = randomNum();
        player2 += playerDice;
        player1Dice.classList.remove("active-player");
        player2Dice.classList.add("active-player");
        player2Dice.textContent = playerDice;
        player2Scoreboard.textContent = player2;
        player1Turn = true;
    }
    gameFinished() };
});
resetBtn.addEventListener("click", resetGame);

function randomNum() {
    let number = Math.floor(Math.random() * 8 ) + 1;
    return number;
};


function gameFinished() {
    if (player1 >= 20){
        turnMessage.textContent = `Player 1 has Won the Game!`;
        resetBtn.style.display = "block";
        rollBtn.style.display = "none";
        hasGameFinished = true;
    } if (player2 >= 20){
        turnMessage.textContent = `Player 2 has Won the Game!`;
        resetBtn.style.display = "block";
        rollBtn.style.display = "none";
        hasGameFinished = true;
    };
};
function resetGame() {
    player1 = 0;
    player2 = 0;
    turnMessage.textContent = `Player 1 Turn`;
    player1Dice.textContent = `-`;
    player2Dice.textContent = `-`;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Turn = true;
    hasGameFinished = false;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
};
