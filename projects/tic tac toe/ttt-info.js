function showInfo() {

    $("#t-table").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Try to create a row of 3 '0's without being blocked by the CPU. This game is designed to be impossible to beat - the game will only end in a tie or a CPU victory.
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to click on an empty space. 
    <br><br>
    <u>How It Works</u>
    <br><br>
    All variables are declared at the beginning of the code including winCombos, an array composed of sub-arrays listing all possible winning combinations of spaces in the game. The startGame() function clears all cells and
    creates a new array with indexes 0-8. This origBoard array is now the basis for player and CPU input. Once a player has made an input into the cell, the innertext is altered depending on which player makes the input. The code 
    recognises this as no longer being empty. A tie is declared when no empty squares are present and the win condition has not been met.  A win is determined by using a reducer on the origBoard array and adding player moves to the accumulator. 
    If the values of either players' moves match any of the winCombos, a win is declared for whichever player matches the combo. 
    <br>
    A standout feature of this project is the use of the Minimax algorithm, which recurs through each play of the game to determmine the best possible move for the CPU based on human input and available 
    spaces on the board. The algorithm iterates through each theoretical move available in the game and assigns a negative score for each move resulting in a human-player victory, and a positive score for each move 
    resulting in a CPU victory. The 'scores' for these theoretical plays are evaluated using their score total, and the best-scoring is assigned to the bestMove variable. This algorithm ensures that the human player cannot win the game. 
	
    
    `
    
    ); 
}

function closeInfo() {
    $("#t-table").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
