function playGuessingGame(numToGuess, totalGuesses){
    event.preventDefault();
    if(isNaN(numToGuess)){
        return -3;
    }
    if(totalGuesses === undefined){
        totalGuesses = 10; // default value of attempts is 10
    }
    let playerInput;

    // totalGuesses--; // correct amount of guesses player has

   for(let i = 0; i < totalGuesses; i++){
        if(i==0){
            playerInput = prompt("Enter a number between 1 and 100.");
            updateTable(i, totalGuesses, playerInput);
        } 
        else if(playerInput === null || playerInput === undefined){ //moved this before other pieces of code.
            return -1; // exit function if error is found
        } 
        else if(isNaN(playerInput)){
            playerInput = prompt("Please enter a number.");
            continue; // If the input is not a number, remind user to input number
        }
        else if(playerInput < numToGuess){
            updateTable(i, totalGuesses, playerInput);
            playerInput = prompt(playerInput + " is too small. Guess a larger number.");
            continue;
        }
        else if(playerInput > numToGuess){
            updateTable(i, totalGuesses, playerInput);
            playerInput = prompt(playerInput + " is too large. Guess a smaller number.");
            continue;
        }
        else if(playerInput == numToGuess){
            updateTable(i, totalGuesses, playerInput);
            return (totalGuesses); // return the amount of attempts that the player had remaining
        }
    }

    return -2;
    
}

document.getElementById("startButton").addEventListener("click", startGame);
function startGame(){
    event.preventDefault();
    secretNum = document.getElementById("secret").value;
    attemptsNum = document.getElementById("attempts").value;
    let gameReturn = playGuessingGame(secretNum, attemptsNum);
    gameResult(gameReturn);
}

function gameResult(gameReturn){
    event.preventDefault();
    let message = "";
    if(gameReturn == -1){
        // console.log("Error found in gameplay.")
        message = "Error found in gameplay.";
    } else if(gameReturn == -3) {
        // console.log("Please input an actual number into the Secret Number to play.");
        message = "Please input an actual number into the Secret Number to play.";
    } else if(gameReturn == -2) {
        // console.log("You ran out of attempts. Player 1 Wins!")
        message = "You ran out of attempts. Player 1 Wins!";
    } else if(gameReturn == 0){
        // console.log("That was a close one! That was your final attempt at the number. Player 2 Wins!");
        message = "That was a close one! That was your final attempt at the number. Player 2 Wins!";
    } else{
        // console.log("You had " + gameReturn + " attempts remaining. Player 2 Wins!");
        message = "You had " + gameReturn + " attempts remaining. Player 2 Wins!";
    }
    document.getElementById("gameResultMessage").innerHTML = message;
}

function updateTable(attemptsMade, totalGuesses, numGuessed){
    const tableElem = document.getElementById("gameTable");
    const attemptRow = tableElem.childNodes[1].childNodes[0];
    console.log(attemptRow);
    const numGuessRow = tableElem.childNodes[1].childNodes[2];
    console.log(numGuessRow);
    console.log("Total Guesses: " + totalGuesses);
    console.log("Number Guessed: " + numGuessed);
    console.log("Table: " + tableElem + "\n");
}