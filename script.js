function getComputerChoice() 
{
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return "rock";
    if(choice == 1) return "paper";
    if(choice == 2) return "scissor";
}

function getHumanChoice()
{
    let humanChoice = prompt("Enter your move!");
    return humanChoice;
}

let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) 
    {
        humanChoice = humanChoice.toLowerCase();
        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissor")
        {
            console.log("Invalid choice");
            return;
        }
        
        
        let computerWon = false;
        let tie = false;

        if(humanChoice == "rock")
        {
            if(computerChoice == "rock") tie = true;
            if(computerChoice == "paper") computerWon = true;
        }

        if(humanChoice == "paper")
        {
            if(computerChoice == "paper") tie = true;
            if(computerChoice == "scissor") computerWon = true;
        }

        if(humanChoice == "scissor")
        {
            if(computerChoice == "scissor") tie = true;
            if(computerChoice == "rock") computerWon = true;
        }

        if(tie) console.log("its a tie!");

        if(computerWon) 
        {
            console.log("loser!");
            computerScore++;
        }

        if(!computerWon && !tie) 
        {
            console.log("winner!");
            humanScore++;
        }
    }

const winnerDisplay = document.querySelector("#winner");
function checkForWinner() {
    if(humanScore == 5) 
    {
        winnerDisplay.textContent = "Human is the winner! Game Over!";
    }
    else if(computerScore == 5)
    {
        winnerDisplay.textContent = "Computer is the winner! Game Over!";
    }
}

const buttons = document.querySelectorAll("button");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        if(e.target.id == "rock-btn") playRound("rock", getComputerChoice());
        if(e.target.id == "paper-btn") playRound("paper", getComputerChoice());
        if(e.target.id == "scissor-btn") playRound("scissor", getComputerChoice());

        humanScoreDisplay.textContent = `Human Score :- ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score :- ${computerScore}`;

        checkForWinner();
    });
});