READ input of stone / paper / scissor
COMPUTE random computer choice
COMPARE choice human vs. computer
WRITE result
COUNT rounds
IF five rounds are Played
    COMPARE end result
    PRINT result
ELSE new round




function playRound(){
    if (humanChoice === computerChoice) {
        console.log("equal!");
        return;
    }

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "scissor":
                    ++humanScore;
                    return;
                case "paper":
                    ++computerScore
                    return; 
            }
        case "paper":
            switch (computerChoice) {
                case "scissor":
                    ++computerScore;
                    return;
                case "stone":
                    ++humanScore
                    return;
                default: 
                    return;
            }
        case "scissor":
            switch (computerChoice) {
                case "paper":
                    ++humanScore;
                    break;
                case "rock":
                    ++computerScore
                    break;
                default:
                    break;
            }
    }
    return;
}