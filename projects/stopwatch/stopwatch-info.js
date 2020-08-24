function showInfo() {

    $(".stopwatch_container").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $("#global-info p").html(
        
    `
    <u>Controls</u>
    <br><br>
    Click the buttons using the mouse to control the timer.
    <br><br>
    <u>How It Works</u>
    <br><br>
    The code begins by declaring all variables which will be required. Fucntions relevant to the stopwatch have already
    been called within the markup and are defined here. The run function activates the getTimer() function,
    incrementing milliseconds until they turn into seconds, and seconds until they turn into minutes. This function is then 
    called by the start() function, set to run once every 10 milliseconds to create the expected behaviour of a stopwatch.
    The pause() function calls the stopTimer() function. This arrests the interval set earlier, pausing the timer. 
    Hitting the stop button does the same, in addition to reverting all counters to 0. The lap button will snapshot the time 
    and create an li element which will then be displayed under the stopwatch itself. Hitting the reset laps button will remove 
    all li elements. The getTimer() function also adds a 0 to all counters under 10 to give the look of a digital counter.    


    
    
    
    `
    
    ); 
}

function closeInfo() {
    $(".stopwatch_container").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}

