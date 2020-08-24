function showInfo() {

    $("#outer-circle").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Power on the device and hit 'Start' to get going. Keep a close watch on the pattern set by Simon, 
    and repeat it by clicking on the correct colors in the correct order. Any mistakes and you'll have to try 
    that go again. If playing on 'strict' mode, a mistake will send you back to the beginning. Correctly repeat
    ten patterns to win the game.  
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to click on the correct quadrant. 
    <br><br>
    <u>How It Works</u>
    <br><br>
    The code begins by declaring all variables that will be used throughout the program, including the variables order
    and player order, which are declared as empty arrays. Any DOM elements required by the code are also called here. 
    The on button is given its functionality through an if statement which uses an event listener to switch between 'on' and 
    'off' states. If the start button is on, the play function is called. This function uses a for loop to push a random number
    between one and four into the order array. This order corresponds to functions one, two, three and four which contain their own
    specific noises and flash-colours which will activate when they feature in the array. These in turn correspond to the four quadrants
    making up the circle in the game. The player input is stored in an array called player order. This is compared with the order array in the 
    check function, which uses an if statement to determine whether the player has won, has entered the correct pattern, or has entered the incorrect pattern,
    and which action to take in response. The winScore variable is used to set the total amount of turns in the game. 

    `
    
    ); 
}

function closeInfo() {
    $("#outer-circle").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}

