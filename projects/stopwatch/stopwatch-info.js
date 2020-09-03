function showInfo() {

    $(".stopwatch_container").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $(".project-info-overlay p").html(
        
    `
    <u>Controls</u>
    <br><br>
    Click or tap the buttons to control the timer.
    <br><br>
    <u>How It Works</u>
    <br><br>
    The code begins by declaring all variables which will be required. Callback functions  have already
    been added in the markup, and those functions are defined here. The run function activates the getTimer() function,
    incrementing milliseconds until they turn into seconds, and seconds until they turn into minutes. This function is then 
    called by the start() function, set to run once every 10 milliseconds to create the expected behaviour of a stopwatch.
    The pause() function calls the stopTimer() function. This arrests the interval set earlier, pausing the timer. 
    Hitting the stop button does the same, in addition to reverting all counters to 0. The lap button will snapshot the time 
    and push it into an array, which is then mapped display laps in the DOM as <li> elements. The lap counter will display a limit of 15 laps before
    overwriting the first index with the latest time.  
    
    Hitting 'reset laps'  will remove all li elements. The getTimer() function also adds a 0 to all counters under 10 to give the look of a digital counter.    


    
    
    
    `
    
    ); 
}

function closeInfo() {
    $(".stopwatch_container").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}

