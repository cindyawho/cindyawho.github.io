function playGuessingGame(numToGuess, totalGuesses){
    let playerInput = prompt("Enter a number between 1 and 100.");
    
    if(playerInput === null || playerInput === undefined){ //moved this before other pieces of code.
        return 0;
    }
    
    if(totalGuesses === undefined){
        totalGuesses = 10;
    }
    let originalGuess = totalGuesses;


    while(totalGuesses > 0){
        if(playerInput === null || playerInput === undefined){ //moved this before other pieces of code.
            return 0;
        }
        if(isNaN(playerInput)){
            playerInput = prompt("Please enter a number.");
            continue;
        }
        else if(playerInput < numToGuess){
            playerInput = prompt(playerInput + " is too small. Guess a larger number.");
            totalGuesses--;
            continue;
        }
        else if(playerInput > numToGuess){
            playerInput = prompt(playerInput + " is too large. Guess a smaller number.");
            totalGuesses--;
            continue;
        }
        else if(playerInput == numToGuess){
            totalGuesses--;
            return originalGuess - totalGuesses;
        }
    }

    return 0;
    
}