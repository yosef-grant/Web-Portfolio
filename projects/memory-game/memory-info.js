function showInfo() {

    $(".memory-cells").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Match up eigth pairs of cards (values and suits) to win the game. Click on a card and then
    try to find the corresponding pair. 
    <br><br>
    <u>Controls</u>
    <br><br>
    Left-click to select a card.
    <br><br>
    <u>How It Works</u>
    <br><br>
    The card pairs are based around a JavaScript array, in which the indexes comprise the numbers one to
    eight, with each number in the series appearing twice. This corresponds to the eight possible
    pairs in sixteen cards. The default image for the cards is the reverse of a playing card. When
    a card is clicked, an event listener is used to 'turn' the card, revealing it's specific value. The 
    image to be used for each flipped card is determined using a switch statement. Each card-space is assigned a dataset of 'turnable' in the markup. This
    is used by the code to determine if the card may still be flipped. If a match occurs, 
    'turnable' is set to false for both those cards and they will remain flipped. If the cards do not match, a time out function will 
    flip both cards back over after a one second delay. A stand-out feature of this project is an implementation of
    the Fisher-Yates algorithm, which allows the cards to be randomly shuffled each time the game is rendered, meaning each iteration 
    of the game features a new card layout. This is achieved using a for loop to iterate backwards through the numbers array indexes one by one. A new position is generated 
    using RNG. This new position is kept in a temporary variable, and then inserted back into the original array to determine the new position of that index. 
    This loops through the entire numbers array to effect a shuffle. 
    
    `
    
    ); 
}

function closeInfo() {
    $(".memory-cells").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
