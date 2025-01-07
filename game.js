function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        console.log("The computer chose: " + choices[randomNumber]);
        return choices[randomNumber];
    }
    
    function getHumanChoice() {
        let humanChoice = prompt("Please choose \"rock\", \"paper\", or \"scissors\".");
        // Convert the strings to lowercase and trim
        humanChoice = humanChoice.toLowerCase().trim();

        if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
            console.log("Invalid choice. Please try again.");
            return getHumanChoice();
        }
        console.log("You chose: " + humanChoice);
        return humanChoice;
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
                   humanChoice === 'paper' && computerChoice === 'rock' ||
                   humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

}

playGame();