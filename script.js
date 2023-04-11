// function playRound(playerSelection, computerSelection) {
    // your code here!
// }

var user;
var comp;
var message = null;
var userPoints = 0;
var compPoints = 0;

function getComputerChoice() {
    var choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function displayScore() {
    document.getElementById("userScore").innerHTML = userPoints;
    document.getElementById("compScore").innerHTML = compPoints;
    document.getElementById("message").innerHTML = message;
}

function reset() {
    userPoints = 0;
    compPoints = 0;
    message = null;
    displayScore();
}

// displayScore();

function choose(choice){
    user = choice;
    // console.log("You chose " + user);
    comp = getComputerChoice()

    if (user == comp) {
        message = "It's a tie.";
    } else if (user == "rock") {
        if (comp == "paper") {
            message = "You lose...";
            compPoints = compPoints + 1;
        } else {
            message = "You win!";
            userPoints = userPoints + 1;
        }
    } else if (user == "paper") {
        if (comp == "scissors") {
            message = "You lose...";
            compPoints = compPoints + 1;
        } else {
            message = "You win!";
            userPoints = userPoints + 1;
        }
    } else if (user == "scissors") {
        if (comp == "rock") {
            message = "You lose...";
            compPoints = compPoints + 1;
        } else {
            message = "You win!";
            userPoints = userPoints + 1;
        }
    }

    displayScore();
    
    // console.log(userPoints,compPoints);

    if (userPoints == 5) {
        alert("You are victorious!");
        reset();
    } else if (compPoints == 5) {
        alert("You have been defeated...");
        reset();
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);