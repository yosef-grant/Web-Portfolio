let ms = 0;
let s = 0;
let m = 0;
let timer;
let stopwatchElement=document.querySelector(".stopwatch");
let lapsContainer=document.querySelector(".laps");





function run() {
    stopwatchElement.textContent = getTimer(); 
    ms++;
    if (ms===100) {
        ms=0;
        s++;
    }
    if (s==60) {
        s=0;
        m++;
    }
}

function start() {
    if(!timer) { // prevents the timer from being re-initialised once it is already running
    timer = setInterval(run, 10) 
}
}

function pause() {
    stopTimer();
}

function stop () {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    stopwatchElement.textContent = getTimer();
}

function restart() {
    stop();
    start();
}

function lap() {
        if(timer) {
        let li = document.createElement('li');
        li.textContent = "|  " + getTimer() + " |" + " ";
        lapsContainer.appendChild(li);   
        };
    };



function resetLaps() {
    lapsContainer.innerText = "";
}

function stopTimer() {
    clearInterval(timer);
    timer = false; // Allows the timer to continue from the paused state
}

function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);  // ensures double digits are displayed even when under 10
}





// UPDATES //

// prevent laps from exceeding a list of 6
