let ComputerChoice, HumanChoice, computerScore, humanScore;

computerScore = 0;
humanScore = 0;

function getComputerChoice(ComputerChoice){
    if(ComputerChoice >= 0.33 && ComputerChoice< 0.66) {
        return console.log("Rock");
    } else if (ComputerChoice < 0.33) {
        return console.log("Paper");
    } else {
        return console.log("Scissors");
    }
}

function getHumanChoice(HumanChoice){
    if(HumanChoice == 1) {
        return console.log("Rock");
    } else if (HumanChoice == 2) {
        return console.log("Paper");
    } else if (HumanChoice == 3) {
        return console.log("Scissors");
    } else {
        console.log("Please choose a valid option");
        getHumanChoice(prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors"));
    }

}

getComputerChoice(Math.random());
getHumanChoice(prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors"));