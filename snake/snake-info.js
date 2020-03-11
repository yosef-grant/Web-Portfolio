function showInfo() {

    $("#snake-canvas").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Guide the snake to the food. Keep going as long as you can, making sure not to run into yourself or any walls! 
    If you do run into trouble, hit the restart button. 
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the cursor keys to control the snake.
    <br><br>
    <u>How It Works</u>
    <br><br>
    The basic functionality of this game relies on the known size of the canvas background image, and attributing a cell-size to the variable 'box'. The cell size is 32. 
    An empty array named snake is declared, and the first index of that array is then declared as an object with the X and Y co-ordinates set to the center of the canvas using multiples of the 
    box variable. A food object is declared, using RNG to create random X and Y co-ordinates at which the food will appear throughout the game. Input is handled using a for loop and event listeners set to the keycode of the cursor
    keys, with a d variable used to ensure that the snake cannot reverse direction horizontally or vertically. A collision function will iterate through the snake array to check that the snake head X and Y co-ordinates are never 
    the same as the snake 'body'. The draw function does most of the heavy lifting in the program, drawing to the canvas and dictating the snake behaviour upon changes of direction and consumption of food. An
    illusion of movement is given by deleting the last index of the snake array every time the snake 'moves', and creating a new snake head based on the most up-to-date position by using array.unshift(). If the 
    snake X or Y co-ordinates exceed the bounds of the canvas, or if the collosion function is called, the game is over.   
    
    `
    
    ); 
}

function closeInfo() {
    $("#snake-canvas").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
