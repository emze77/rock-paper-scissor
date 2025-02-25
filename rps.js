let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const playerChoiceSelector = document.querySelector("#playerChoice")

let introductionText = document.querySelector("#introductionText");
let promptPlayerChoice = document.querySelector("#promptPlayerChoice")

introductionText.textContent = "Deine Wahl!"

playerChoiceSelector.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case 'playerChoiceRock': 
        humanChoice = "rock";
            break;
        case 'playerChoicePaper': 
        humanChoice = "paper";
            break;
        case 'playerChoiceScissor': 
        humanChoice = "scissor";
            break;
    }
    playGame();
});



function getComputerChoice() {
    computerChoice = Math.random();
    return (computerChoice < 0.33) ? computerChoice = "rock"
         : (computerChoice < 0.67) ? computerChoice = "paper"
         : (computerChoice <= 1 )  ? computerChoice = "scissor"
         : computerChoice = false;
}

function playRound(humanChoice) {
    getComputerChoice();
    switch (true) {
        case (humanChoice === computerChoice): {
            console.log("equal!");
            return;
        }
        case ((humanChoice === "rock") && (computerChoice === "scissor")) :
            ++humanScore;
            return;
        case ((humanChoice === "rock") && (computerChoice === "paper")) :
            ++computerScore;
            return;
        case ((humanChoice === "paper") && (computerChoice === "rock")) :
            ++humanScore;
            return;
        case ((humanChoice === "paper") && (computerChoice === "scissor")) :
            ++computerScore;
            return;
        case ((humanChoice === "scissor") && (computerChoice === "paper")) :
            ++humanScore;
            return;
        case ((humanChoice === "scissor") && (computerChoice === "rock")) :
            ++computerScore;
            return;
    }
    return;
}

function promptInterim() {
    promptPlayerChoice.textContent = `Your choice: ${humanChoice}`;
    promptComputerChoice.textContent = `Computer choice: ${computerChoice}`;
    promptRoundCounter = `Round: ${roundCounter}`;
    promtScore = d
    return;
}

function getGameResult() {
    if (humanScore === computerScore) {
        return "Equal!";
    } else if (humanScore > computerScore) {
        return "Congratulation! You've won!";
    } else {
        return "You've lost! =(";
    }
}

function playGame() {
    playRound();
    ++roundCounter;
    promptInterim();
//     humanChoice = "rock"


    // if (roundCounter < 5) {
        
        // console.clear();
        // console.log("humanChoice: " + humanChoice);
        // getComputerChoice();
        // console.log("computerChoice: " + computerChoice);
        // playRound();
        // ++roundCounter;
        // console.log("humanScore is " + humanScore);
        // console.log("computerScore is " + computerScore);
        // console.log("Played Rounds: " + roundCounter);
    // } else {
    //     console.log(getGameResult())
    //     let temp = window.prompt(getGameResult() + " Are you okay with it?")
    // computerScore = humanScore = roundCounter = 0; // verschoben aus ELSE
    // }
    // playGame()
    return;
}

// playGame()




