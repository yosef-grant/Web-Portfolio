function showInfo() {
    $(".tetris-wrapper").fadeOut(200);
    $("#tetris").fadeOut(200);
    $("#tetris-score").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $(".project-info-overlay p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Score points by placing pieces to create full rows. Completing multiple rows at once will net you more points. If you're 
    not fast enough and the pieces stack up to the top, the game is over. 
    <br><br>
    <u>Controls</u>
    <br><br>
    CURSOR KEY LEFT to move piece left, CURSOR KEY RIGHT to move piece right, CURSOR KEY UP to rotate piece, 
    CURSOR KEY DOWN to move piece down, Q to rotate piece anti-clockwise, W to rotate piece clockwise.
    <br><br>
    <u>How It Works</u>
    <br><br>
    Matrixes underpin the entirety of this project, working in conjunction with an HTML canvas. A matrix forms the play area wherein empty space is represented by zeros, and the tetris shapes are formed by individual matrixes, 
    each with its own number to give it a unique identity. This comes in useful when assigning a particular color to each piece. Once the play space has been fully rendered, the merge() function inserts the player 
    matrix, with a randomly-generted piece, into the arena. Event listeners mapped to the appropriate keys allow the player to manipulate the piece in 2-d space, which falls by one increment per second down the length of the arena matrix. 
    Rotation is handled by the rotate() function, which transposes the matrix before flipping it. The extra zeros of empty space around each turnable piece aid in giving the piece a more predictable 'center', keeping the 
    rotation behaviour in line with expectations. Collision functions keep track of the piece as it falls and is rotated, ensuring the piece stays within the playable area when falling, when moved, when rotated at the extreme left and 
    right of the playspace, and when pieces are stacked from top to bottom. The arenaSweep() function loops through the arena playspace. If any 0 values are present in a row, it is incomplete and skipped in the loop. Rows with no 0
    values are considered complete, and are removed from the playspace, removed, and placed at the top of the array as a row of zeroes, pushing the remaining rows down. The score is updated each time the arenaSweep() detects a complete row, and awards 
    10 points for a completed row. A x2 multiplier is in effect for multiple rows completed at once.

    
    `
    
    ); 
}

function closeInfo() {
    $(".tetris-wrapper").delay(400).fadeIn(200);
    $("#tetris").delay(400).fadeIn(200);
    $("#tetris-score").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}

