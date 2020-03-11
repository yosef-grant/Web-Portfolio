function showInfo() {

    $("#quiz-container").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>How to Play</u>
    <br><br>
    Start the quiz and try to guess the correct answer before the timer runs out. 
    <br><br>
    <u>Controls</u>
    <br><br>
    Use the mouse to select an answer.
    <br><br>
    <u>How It Works</u>
    <br><br>
    Each question in the quiz forms an object within the questions array. For each question object, a 'correct' key specifies the correct answer option. The renderQuestion() function 
    uses the running question variable to display the appropriate question, answer choices and image for the current question. Progress through the quiZ is marked through a function that
    runs a for loop which terminates once 'qIndex' reaches the last question. The 'prog' div from the markup is assigned an ID, which increments in accordance with the loop. The countdown
    timer begins at 10 and is set to decrement each second until it either reaches 0 or an answer is selected. If the answer is correct, the progress marker for that question is set to green, and the score increments;
    if incorrect, the marker is set to red and the score remains static. Once the end of the questions array has been reached, the scoreRender() function is called. 
    A percentage result is given based on the score divded by the number of questions in the quiz. A different message will display depending on the player's percentage.

    
    `
    
    ); 
}

function closeInfo() {
    $("#quiz-container").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}
