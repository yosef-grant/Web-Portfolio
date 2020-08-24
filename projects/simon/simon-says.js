///  VARIABLES  ///

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;  // tracks whether the human input is correct
let compTurn;  // track whether it is the human turn or CPU turn;
let intervalID;
let strict = false; //by default the strict mode is set to OFF
let noise = true;
let on = false; // by default the power setting is OFF
let win; //condition met for game win
let winScore = 10; // this variable controls the number of turns in a game

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

///  STRICT BUTTON  ///

strictButton.addEventListener("click", (event) => {  // Toggle for STRICT play
    if (strictButton.checked == true) {
        strict = true;
    }
    else {
        strict = false;
    }
}); 

///  ON SWITCH & TURN COUNTER ACTIVATION ///

onButton.addEventListener("click", (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "--";
    }
    else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalID);
        }
    });

///  START BUTTON  ///

startButton.addEventListener("click", (event) => {
    if (on || win) {
        play();
    }
});

// PLAY FUNCTION //

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < winScore; i++) {  // 20 rounds are required to beat the game
        order.push(Math.floor(Math.random() * 4) +1);  // .floor rounds the decimal random number

    } 
    compTurn = true;
    intervalID = setInterval(gameTurn, 800); // time between flashes = 800ms
}

function gameTurn() {
    on = false;  // prevents player input during CPU turn
    if (flash == turn) {  // if the flashes = the count, i.e 1/1 2/2 3/3 etc.
        clearColor();
        clearInterval(intervalID);
        compTurn = false;
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) // if the first number in the 1-4 ARRAY = 1 //
            one();
            if (order[flash] == 2) // if the first number in the 1-4 ARRAY = 2 //
            two();
            if (order[flash] == 3) // if the first number in the 1-4 ARRAY = 3 //
            three();
            if (order[flash] == 4) // if the first number in the 1-4 ARRAY = 4 //
            four();
            flash++;
        }, 200);
    }
}

/// FLASHING CODE  ///

function one () {
    if (noise) {
        let audio = document.getElementById("clip1");  //no # since JS already knows its an ID
        audio.play(); // plays associated sound
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
}

function two () {
    if (noise) {
        let audio = document.getElementById("clip2");  //no # since JS already knows its an ID
        audio.play(); // plays associated sound
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
}

function three () {
    if (noise) {
        let audio = document.getElementById("clip3");  //no # since JS already knows its an ID
        audio.play(); // plays associated sound
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
}

function four () {
    if (noise) {
        let audio = document.getElementById("clip4");  //no # since JS already knows its an ID
        audio.play(); // plays associated sound
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
}


function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
};


function flashColor() {
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";
};

// WIN GAME //

function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}

/// PLAYER INPUT ///

// Top Left //

topLeft.addEventListener("click",(event) => {
    if (on) {
        playerOrder.push(1);  // if player clicks topLeft, add 1 to array
        check(); 
        one();  // performs the one function
        if (!win) {  
            setTimeout(() =>{
                clearColor();
            }, 300);  // the color will clear after an interval of 300ms
        }
    }
})

//  Top Right //

topRight.addEventListener("click",(event) => {
    if (on) {
        playerOrder.push(2);  // if player clicks topLeft, add 2 to array
        check(); 
        two();  // performs the two function
        if (!win) {  
            setTimeout(() =>{
                clearColor();
            }, 300);  // the color will clear after an interval of 300ms
        }
    }
})
// Bottom Left //

bottomLeft.addEventListener("click",(event) => {
    if (on) {
        playerOrder.push(3);  // if player clicks topLeft, add 3 to array
        check(); 
        three();  // performs the three function
        if (!win) {  
            setTimeout(() =>{
                clearColor();
            }, 300);  // the color will clear after an interval of 300ms
        }
    }
})

// Bottom Right //

bottomRight.addEventListener("click",(event) => {
    if (on) {
        playerOrder.push(4);  // if player clicks topLeft, add 4 to array
        check(); 
        four();  // performs the four function
        if (!win) {  
            setTimeout(() =>{
                clearColor();
            }, 300);  // the color will clear after an interval of 300ms
        }
    }
})

//  CHECK FUNCTION  ///

function check() {
    if (playerOrder[playerOrder.length -1] !== order[playerOrder.length-1]) 
    good = false;
    if (playerOrder.length == winScore && good) {  // set amount of game turns
        winGame();  // a WIN
    }
    if (good == false) {
        flashColor();
        turnCounter.innerHTML="NO";
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();  // an error was made
   if (strict) {
        play();
    } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalID = setInterval(gameTurn, 800);
    }
    }, 800);
    noise = false;
    }
    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalID = setInterval(gameTurn, 800);
    }
}

const hardReset = () => {
    location.reload();
}

/* FUTURE UPDATES */

//  - ADD a menu to select number of turns on the page itself