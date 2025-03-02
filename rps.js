let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
let timeout = false;

const playerChoiceSelector = document.querySelector("#playerChoice");
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
    clearComputerHighlights();
    clearPlayerHighlights();
    newGame();
    return;
}
    
playerChoiceSelector.addEventListener('click', (e) => {
    if (timeout === true) return;
    clearPlayerHighlights();
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

function clearPlayerHighlights() {
    playerButtons.forEach(playerButton => {
        playerButton.classList.remove("highlight");
        playerButton.classList.add("bgWhite");
})
}

function clearComputerHighlights() {
    computerButtons.forEach(computerButton => computerButton.classList.remove("highlight"));
}


function playRound() {
    getComputerChoice();
    // getComputerChoice();
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
    clearComputerHighlights();
    timeout = true;
    setTimeout(timeoutFunction, 1000);
    setTimeout(playRound, 1000);
    ++roundCounter;
    introductionText.textContent = `Runde: ${roundCounter}`;
    if (roundCounter === 6) {
        introductionText.textContent = getGameResult();
        clearComplete();
        setTimeout(newGame, 3000)
    }
    return;
}

function timeoutFunction () {
    timeout = false;
    return;
}

function newGame () {
    introductionText.textContent = "Choose to start!";
}

// playGame()




