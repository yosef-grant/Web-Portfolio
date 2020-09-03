function showInfo() {

    $("#canvas").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $(".project-info-overlay p").html(
        
    `
    <u>How to Draw</u>
    <br><br>
    Inside the canvas area, hold down left click and move the mouse to
    draw whatever you like. You can then release left click to pick up the pen and put it down in 
    a different position to draw somewhere else. Modify the colour and pen size using the toolbar. Hit the refresh button to clear the canvas.
    <br><br>
    <u>How It Works</u>
    <br><br>

    An HTML canvas is created in the markup. The dimensions of the canvas are set to the height and width of the browser window. JavaScript is then used
    to grab the canvas from the DOM and manipulate it through user input. Event listeners
    detect when the left button is clicked and when it is released. Both these events are 
    utilised by the startPosition( ) and endPosition( ) functions respectively to create a drawing based on the X and Y 
    positions of the user's cursor. Color is handled by accessing a Javascript array as an argument in the setColor( ) function. The function sets the selected
    color to include an 'active class' to highlight current color. 
      
    
    
    `
    
    ); 
}

function closeInfo() {
    $("#canvas").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
