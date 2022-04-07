

// Search Function

const searchInput = document.getElementById("searchInput");
const javascriptGamesBtn = document.getElementById("javascriptGamesBtn");

javascriptGamesBtn.addEventListener("click", function(){
    searchInput.value = "Javascript Game";
    let search = "javascript game";
    let allProjects = document.getElementsByClassName("project");
    for (let counter = 0; counter < allProjects.length; counter++){
        const currentItem = allProjects[counter].textContent.toLowerCase()
        if (currentItem.includes(search)) {
            allProjects[counter].style.display = "block"
        } else {
            allProjects[counter].style.display = "none"
        };
    };
});

searchInput.addEventListener("keyup", listener);

function listener(event) {
    let search = event.target.value.toLowerCase();
    let allProjects = document.getElementsByClassName("project");
    for (let counter = 0; counter < allProjects.length; counter++){
        const currentItem = allProjects[counter].textContent.toLowerCase();
        if (currentItem.includes(search)) {
            allProjects[counter].style.display = "block";
        } else {
            allProjects[counter].style.display = "none";
        };
    };
};

// Dice Game
const turnMessage = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const mayhem = document.getElementById("mayhem")
const mayhemDesc = document.getElementById("mayhemDesc")


let player1 = 0;
let player2  = 0;
let player1Turn = true;
let hasGameFinished = false;
let playerDice1 = "";
let playerDice2 = "";

rollBtn.addEventListener("click", function(){
    if (hasGameFinished === false){
        if (player1Turn){
            randomNum1()
            player1 += playerDice1;
            player1Dice.textContent = playerDice1;
            player2Dice.classList.remove("active-player");
            player1Dice.classList.add("active-player");
            player1Scoreboard.textContent = player1;
            player1Turn = false;} 
        else if (playerDice1 === playerDice2 ) {
                mayhem.style.display = "block"
                mayhemDesc.style.display = "block"
                rollBtn.style.display = "none"
            }
        else {
            randomNum2()
            player2 += playerDice2;
            player2Dice.textContent = playerDice2;
            player1Dice.classList.remove("active-player");
            player2Dice.classList.add("active-player");
            player2Scoreboard.textContent = player2;
            player1Turn = true;}
    gameFinished() 
    };
});
resetBtn.addEventListener("click", resetGame);

mayhem.addEventListener("dblclick", function() {
    let temp;
    temp = player1;
    player1 = player2;
    player2 = temp;
    player1Scoreboard.textContent = player1
    player2Scoreboard.textContent = player2
    mayhem.style.display = "none"
    mayhemDesc.style.display = "none"
    rollBtn.style.display = "block"
    randomNum1()
    randomNum2()
})

function randomNum1() {
    let number = Math.floor(Math.random() * 8 ) + 1;
    playerDice1 = number
};
function randomNum2() {
    let number = Math.floor(Math.random() * 8 ) + 1;
    playerDice2 = number
}


function gameFinished() {
    if (player1 >= 20 || player2 >= 20){
        
        hasGameFinished = true;
        resetBtn.style.display = "block";
        rollBtn.style.display = "none";

        if (player1 >= 20){
         turnMessage.textContent = `Player 1 has Won the Game!`}
        if (player2 >= 20){
         turnMessage.textContent = `Player 2 has Won the Game!`}
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
