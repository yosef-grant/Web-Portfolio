function showInfo() {

    $("#pong").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    
    `
    <u>How to Play</u>
    <br><br>
    The player must use their paddle to get the ball past the CPU opponent. The first one to reach seven points is
    the winner.
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to move your paddle up and down. 
    <br><br>
    <u>How It Works</u>
    <br><br>
    The game space is created using a 400 x 600 HTML canvas. Data about all the essential elements of the game 
    (ball, player paddle, CPU paddle, the net) are stored in JavaScript objects. 
    These objects are then referenced by later functions which manipulate the canvas context to style and position
    the game elements. A 'mousemove' event listener is added to the player paddle, and programmed to shift the paddle
    by reflecting mouse movement on the y-axis. The update function is used to keep track of scoring and ball movement. 
    If the x-axis position of the ball, less the ball radius, is less than zero, the ball has gone past the player and the CPU
    scores. If the x-axis position is greater than the canvas width, the player scores. The CPU AI is handled by altering 
    the speed at which the CPU paddle changes positions to intercept the ball on the Y-axis. The last part of this function
    determines where on the paddle the ball strikes, and the way its movement is affected by a particular angle. The ball also
    increases in velocity on each hit. A set interval function then allows the game to run as expected by calling the game function
    sixty times every second.       

    
    `
    
    ); 
}

function closeInfo() {
    $("#pong").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}


