document.addEventListener ("DOMContentLoaded", function(){
    const squares = document.querySelectorAll('#board > div');
    const gameState = Array(9).fill(null);

    let Player = 'X';

    
    squares.forEach((square, i) => {
        square.classList.add("square");

        square.addEventListener("mouseenter", function(){
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function(){
            square.classList.remove("hover");
        });

        square.addEventListener("click", function() {
            if (!gameState[i]){
                gameState[i]=Player;
                square.textContent = Player;
                square.classList.add(Player);


                Player=Player=== 'X'?'O':'X';
            }
        });
    });

});
