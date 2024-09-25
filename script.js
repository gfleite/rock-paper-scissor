let ComputerChoice, HumanChoice, computerScore, humanScore;

computerScore = 0;
humanScore = 0;

function getComputerChoice(ComputerChoice){
    if(ComputerChoice >= 0.33 && ComputerChoice< 0.66) {
        return console.log("Rock");
    } else if (ComputerChoice < 0.33) {
        return console.log("Paper");
    } else {
        return console.log("Scissor");
    }
}

function getHumanChoice(HumanChoice){
    console.log(HumanChoice);
}

getComputerChoice(Math.random());
getHumanChoice(prompt("Choose between Rock, Paper or Scissor: "));