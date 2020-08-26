function showInfo() {

    $(".rps-wrapper").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $(".project-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Try to get the higher score by beating the CPU-opponent. Rock beats scissors, paper beats rock and scissors beats
    paper. 
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to select a move using one of the three buttons. 
    <br><br>
    <u>How It Works</u>
    <br><br>
    The entire program is writting within the context of the game function. The game is initialised with both
    the player and computer scores set to zero, and event listeners attached to each game element. Available moves 
    for the CPU are contained in an object, which is then referenced by a later function. This uses RNG to select a random
    move for the CPU in response to the player's input. At the end of each turn, the checkScore( ) function is 
    run to determine who won the round, and updateScore( ) will increment either the player or CPU score accordingly.
    The checkScore( ) function comprises an if statement which runs through all permutations of the a single turn, and 
    determines which code to execute based on the actual outcome.   
    
    `
    
    ); 
}

function closeInfo() {
    $(".rps-wrapper").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
