let ms = 0;
let s = 0;
let m = 0;
let timer;
let stopwatchElement=document.querySelector(".stopwatch");
let lapsContainer=document.querySelector(".laps");
let lapArray = [];





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
            lapArray.push(getTimer());
            
            lapsContainer.innerHTML = lapArray.map((lap) => {
                return '<li>' + '| ' + lap + ' |' + '</li>';
            }).join('');     

        if(lapArray.length == 15){
            let lapList = lapArray.slice(1);
            lapArray = lapList;
        }
        console.log(lapArray);
        };
    };



function resetLaps() {
    lapsContainer.innerText = "";
    lapArray = [];
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
