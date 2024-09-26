let computerChoice, humanChoice, computerScore, humanScore;

computerScore = 0;
humanScore = 0;

function getComputerChoice(computerChoice){
    if(computerChoice >= 0.33 && computerChoice< 0.66) {
        computerChoice = "Rock";
        console.log(computerChoice);
        return computerChoice;
    } else if (computerChoice < 0.33) {
        computerChoice = "Paper";
        console.log(computerChoice);
        return computerChoice;
    } else {
        computerChoice = "Scissors";
        console.log(computerChoice);
        return computerChoice;
    }
}

function getHumanChoice(humanChoice){
    if(humanChoice == 1) {
        humanChoice = "Rock";
        console.log(humanChoice);
        return humanChoice;
    } else if (humanChoice == 2) {
        humanChoice = "Paper";
        console.log(humanChoice);
        return humanChoice;
    } else if (humanChoice == 3) {
        humanChoice = "Scissors";
        console.log(humanChoice);
        return humanChoice;
    } else {
        console.log("Please choose a valid option");
        getHumanChoice(prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors"));
    }
}

function playRound(computerChoice, humanChoice){
        if(computerChoice === humanChoice){
            console.log(computerChoice);
            console.log(humanChoice);
            console.log("That's a tie!");
        } else if (
            (computerChoice === "Rock" && humanChoice === "Paper") ||
            (computerChoice === "Paper" && humanChoice === "Scissors") ||
            (computerChoice === "Scissors" && humanChoice === "Rock")
        ) {
            console.log("You won!");
        } else {
            console.log("You lost!");
        }
}

computerChoice = getComputerChoice(Math.random());
humanChoice = getHumanChoice(prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors"));
playRound(computerChoice, humanChoice);