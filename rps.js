let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

// READ input of stone / paper / scissor

function getHumanChoice() {
    humanChoice = window.prompt("Do you choose rock, paper or scissor?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
        return humanChoice
        } else {
            console.log("Do you have some problems with spelling?")
            getHumanChoice();
        }
    }

//  COMPUTE random computer choice

function getComputerChoice() {
    computerChoice = Math.random();
    // console.log("computerChoice Number: " + computerChoice);
    return (computerChoice < 0.33) ? computerChoice = "rock"
         : (computerChoice < 0.67) ? computerChoice ="paper"
         : (computerChoice <= 1 )  ? computerChoice ="scissor"
         : computerChoice = false;
}

// COMPARE choice human vs. computer

function playRound() {
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
    if (roundCounter < 5) {
        getHumanChoice();
        console.clear();
        console.log("humanChoice: " + humanChoice);
        getComputerChoice();
        console.log("computerChoice: " + computerChoice);
        playRound();
        ++roundCounter;
        console.log("humanScore is " + humanScore);
        console.log("computerScore is " + computerScore);
        console.log("Played Rounds: " + roundCounter);
    } else {
        console.log(getGameResult())
        let temp = window.prompt(getGameResult() + " Are you okay with it?")
        computerScore = humanScore = roundCounter = 0;
    }
    playGame()
}

playGame()




