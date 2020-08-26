function showInfo() {

    $(".wrapper-connect").fadeOut(150);
    $("#info-reset").fadeOut(150);
    $("#global-info").delay(350).fadeIn(350);
    $(".project-info-overlay p").html(
        
    `
    <u> How to Play </u>
    <br><br>
    Both players take turns to place their counters, trying to get four of their counters in a row. The first player
    to do so is the winner.
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to select an empty space.
    <br><br>
    <u>How It Works</u>
    <br><br>
    This project makes extensive use of jQuery. A JavaSript class is used to create a grid of 6 columns and 7 rows. 
    The grid and cells have been styled using CSS. Event listeners have been added to each cell of the grid, and are used in the program functions to 
    determine and regulate input from either player.  The win state is determined once a series of four cells are shown to have been 'occupied' by a player in any 
    direction (vertically, horizontally, diagonally from bottom left to top right and vice versa). Once a win state has 
    been reached, an alert is prompted naming the victorious player and the board is inactive until it is reloaded.   
    
    `
    
    ); 
}

function closeInfo() {
    $(".wrapper-connect").delay(350).fadeIn(150);
    $("#info-reset").delay(350).fadeIn(150);
    $("#global-info").fadeOut(150);
}