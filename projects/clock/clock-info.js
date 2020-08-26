function showInfo() {

    $(".clock-wrapper").fadeOut(200);
    $("#info-reset").fadeOut(200);
    $("#global-info").delay(400).fadeIn(200);
    $(".project-info-overlay p").html(
        
    `
    
    <u>How It Works</u>
    <br><br>
    This simple clock was created using JavaScript.<br><br>The time is obtained using the new DATE( ) constructor,
    from which hours, minutes and seconds can be pulled and each assigned to it's own variable. The specific time units are 
    then matched to their respective DOM elements, with colons between each to create the look of a digital 
    clock. A zero has also been added to all time elements under ten through use of an 'if' statement. This keeps the digital look consistent.`
    
    ); 
}

function closeInfo() {
    $(".clock-wrapper").delay(400).fadeIn(200);
    $("#info-reset").delay(400).fadeIn(200);
    $("#global-info").fadeOut(200);
}