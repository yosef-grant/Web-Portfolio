function getTime() {

    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    };
    if (mins < 10) {
        mins = "0" + mins;
    };
    if (secs < 10) {
        secs = "0" + secs;
    };

    document.getElementById("hours").innerHTML = hours + " : ";
    document.getElementById("minutes").innerHTML = mins + " : ";
    document.getElementById("seconds").innerHTML = secs;

};

setInterval(getTime, 100);





// UPDATES

// add international times
