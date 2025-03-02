let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let timeout = false;
let gameToEnd = false;

const playerChoiceSelector = document.querySelectorAll(".playerArea");
const playerButtons = document.querySelectorAll(".playerButton")
const computerButtons = document.querySelectorAll(".computerButton")

let playerCounter = document.querySelector("#counterPlayer");
let computerCounter = document.querySelector("#counterComputer");
let clear = document.querySelector("#clear");

clear.addEventListener('click', clearComplete);

function clearComplete () {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    computerCounter.textContent = "";
    playerCounter.textContent = "";
    clearHighlights();
    if (gameToEnd === false) introductionText.textContent = "Choose to start!";
    return;
}

function clearHighlights() {
    playerButtons.forEach(playerButton => playerButton.classList.remove("highlight"));
    computerButtons.forEach(computerButton => computerButton.classList.remove("highlight"));
}
    
playerChoiceSelector.forEach(item => {
    item.addEventListener('click', (e) => {
        if (timeout === true) return;
        if (gameToEnd === true) {
            clearComplete();
            gameToEnd = false;
        }
        clearHighlights();
        let target = e.target;
        switch(target.id) {
            case "playerChoiceRock":
            case "playerSymbolRock": 
            humanChoice = "rock";
            playerChoiceRock.classList.add("highlight");
                break;
            case 'playerChoicePaper':
            case "playerSymbolPaper":
            humanChoice = "paper";
            playerChoicePaper.classList.add("highlight");
                break;
            case 'playerChoiceScissor':
            case "playerSymbolScissor":
            humanChoice = "scissor";
            playerChoiceScissor.classList.add("highlight");
                break;
        }
        playGame();
    })
});


function getComputerChoice() {
    computerChoice = Math.random();
    switch(true) {
        case (computerChoice < 0.33) :
            computerChoice = "rock"
            computerButtons[0].classList.add("highlight");
            break;
        case (computerChoice < 0.67) :
            computerChoice = "paper";
            computerButtons[1].classList.add("highlight");
            break;
        case (computerChoice <= 1 ) :
            computerChoice = "scissor";
            computerButtons[2].classList.add("highlight");
            break;
        default: false;
    }
    return computerChoice;
}




function playRound() {
    getComputerChoice();
    switch (true) {
        case (humanChoice === computerChoice): {
            console.log("equal!");
            return;
        }
        case ((humanChoice === "rock") && (computerChoice === "scissor")) :
            ++humanScore;
            playerCounter.textContent += "I";
            return;
        case ((humanChoice === "rock") && (computerChoice === "paper")) :
            ++computerScore;
            computerCounter.textContent += "I";
            return;
        case ((humanChoice === "paper") && (computerChoice === "rock")) :
            ++humanScore;
            playerCounter.textContent += "I";
            return;
        case ((humanChoice === "paper") && (computerChoice === "scissor")) :
            ++computerScore;
            computerCounter.textContent += "I";
            return;
        case ((humanChoice === "scissor") && (computerChoice === "paper")) :
            ++humanScore;
            playerCounter.textContent += "I";
            return;
        case ((humanChoice === "scissor") && (computerChoice === "rock")) :
            ++computerScore;
            computerCounter.textContent += "I";
            return;
    }
    return;
}

function getGameResult() {
    if (humanScore === computerScore) {
        return "Equal!";
    } else if (humanScore > computerScore) {
        return "Congratulation! You've won!";
    } else {
        return "You've lost!";
    }
}

function playGame() {
    timeout = true;
    setTimeout(preventInbetweenClicks, 1000);
    setTimeout(playRound, 1000);
    ++roundCounter;
    introductionText.textContent = `Runde: ${roundCounter}`;
    if (roundCounter === 5) {
        setTimeout(function() {
            introductionText.textContent = getGameResult();
            gameToEnd = true;
        }, 1000)
    }
    return;
}

function preventInbetweenClicks () {
    timeout = false;
    return;
}

function newGame () {
    introductionText.textContent = "Choose to start!";
}

// playGame()




