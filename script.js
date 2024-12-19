const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    /* This returns a random number between 1 and 3 so 1,2,3 */
    if(randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if(randomNumber === 3) {
        return "scissors";
    }
}

// console.log(getComputerChoice());

const getHumanChoice = () => {
    const userInput = prompt("Rock, Paper, Scissors?");

    const modifiedInput = userInput.toLowerCase();

    if(modifiedInput === "") {
        alert("Please enter something.");
    } else if(modifiedInput !== "rock" && modifiedInput !== "paper" && modifiedInput !== "scissors") {
        alert("Please enter a valid response.");
    }
    else {
        return modifiedInput;
    }
    
    
}

// console.log(getHumanChoice());

