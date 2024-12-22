let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    /* This returns a random number between 1 and 3 so 1,2,3 */
    if(randomNumber === 1) {
        return "rock";
        // I'm gonna make it case-insensitive here
    } else if (randomNumber === 2) {
        return "paper";
    } else if(randomNumber === 3) {
        return "scissors";
    }
}

// console.log(getComputerChoice());

const getHumanChoice = () => {
    const userInput = prompt("Rock, Paper, Scissors?");
    // Ask user for an input
    const modifiedInput = userInput.toLowerCase();
    // Convert user input to lowercase 
    if(modifiedInput === "") {
        alert("Please enter something.");
        // Check if user input is empty
    } else if(modifiedInput !== "rock" && modifiedInput !== "paper" && modifiedInput !== "scissors") {
        alert("Please enter a valid response.");
        // Check if user input is valid ie "Rock or paper or scissors"
    }
    else {
        return modifiedInput;
        // return the input
    }
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

   

}

// console.log(getHumanChoice());

