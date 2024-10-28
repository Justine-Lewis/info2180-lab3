document.addEventListener ("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board > div');
    const gameState = Array(9).fill(null);

    let Player = 'X';
    const statusDiv = document.getElementById('status');
    let gameActive = true; //tracks whether the game is still active

    const winningCombos = [
        [0,1,2], //Row 1
        [3,4,5], //Row 2
        [6,7,8], //Row 3
        [0,3,6], //Column 1
        [1,4,7], //Column 2
        [2,5,8], //Column 3
        [0,4,8], //Leading Diagonal
        [2,4,6] //Diagonal
    ];

    
    squares.forEach((square, i) => {
        square.classList.add("square");

        square.addEventListener("mouseenter", function(){
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function(){
            square.classList.remove("hover");
        });

        square.addEventListener("click", function() {
            if (gameActive && !gameState[i]){
                gameState[i]=Player;
                square.textContent = Player;
                square.classList.add(Player);

                if (findWinner(Player)){
                    statusDiv.textContent = `Congratulations! ${Player} is the Winner!`;
                    statusDiv.classList.add('you-won');
                    gameActive = false;//change the condition of loop so loop is fully terminated and no more moves are played
                    return;//prevent further moves
                }


                Player=Player=== 'X'?'O':'X';//This checks what value is stored X or O and then value is re-assigned to Player
            }
        });
    });


//This function first checks if there is at least one winning combination is met, then each index is checked in the current combination to find the winner
    function findWinner(Player){
        return winningCombos.some(combination =>{
            return combination.every(i=> gameState[i]===Player);
        });
    }

    //Add event listener for New Game
    document.querySelector('.btn').addEventListener("click", function(){
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X','O', 'hover');
        });
        gameState.fill(null);
        Player='X';
        statusDiv.textContent='Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        gameActive=true;
    });

});
