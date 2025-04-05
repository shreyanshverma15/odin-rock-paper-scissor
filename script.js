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

function playGame()
{
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

    for(let i = 0; i < 5; i++) playRound(getHumanChoice(), getComputerChoice());
}

playGame();