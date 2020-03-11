// CANVAS SETUP

const canvas = document.querySelector("#pong");
const ctx = canvas.getContext("2d");


// CREATE BALL 

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed: 5,
    velocityX : 5,
    velocityY : 5,
    color : "white"
}

// CREATE PLAYER PADDLE

const player = {
    x : 0,
    y : canvas.height/2 - 100/2, // midway through canvas y, then half paddle height
    width : 10,
    height : 100,
    color : "white",
    score : 0,
    win: ""
}

// CREATE CPU PADDLE

const CPU = {
    x : canvas.width - 10, //full canvas width - paddle width
    y : canvas.height/2 - 100/2, 
    width : 10,
    height : 100,
    color : "white",
    score : 0,
    win: ""
}


// CREATE NET

const net = {
    x: canvas.width/2 -1,
    y: 0,
    width : 2,
    height: 10,
    color: "white"

}


// DRAW RECTANGLE

function drawRect(x,y,w,h,color) {
    
ctx.fillStyle = color;
ctx.fillRect(x,y,w,h);
}



// DRAW CIRCLE

function drawCircle(x,y,radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false)  // x, y, radius, start angle, end angle, direction
    ctx.closePath();
    ctx.fill();
}


// DRAW TEXT

function drawText(text,x,y,color) {
    ctx.fillStyle = color;
    ctx.font = "45px fantasy";
    ctx.fillText(text,x,y);
}

// DRAW NET 

function drawNet() {
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }

}

// EVENT LISTENER

canvas.addEventListener("mousemove", movePaddle);

function movePaddle(event) {
    let rect = canvas.getBoundingClientRect(); // keeps mouse/paddle movement consistent
    player.y = event.clientY - rect.top - player.height/2;
}

// collision detection
function collision(b,p){
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
    
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;
    
    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

// UPDATE (covers position, movement, score, velocity, etc.) 

function update() {
    
    /* update the score*/
    if (ball.x - ball.radius < 0) {
            CPU.score++;
            resetBall();
        }
        else if (ball.x + ball.radius > canvas.width) {
            player.score ++;
            resetBall();
        }
    

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

        /* AI for CPU */
        let computerLevel = 0.03;
        CPU.y += ((ball.y - (CPU.y + CPU.height/2))) * computerLevel;

        /* reversing velocity upon collision y-axis collision*/
 
       if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
            ball.velocityY = -ball.velocityY;
       }


    let user = (ball.x + ball.radius < canvas.width/2) ? player : CPU;
    
    if (collision(ball, user)) {
        /* where does the ball hit the paddle? */
    let collidePoint = (ball.y - (user.y + user.height/2));
    collidePoint = collidePoint/(user.height/2); // this normalises the collision points to -1(top), 0 (middle), and 1 (bottom)
    /* calculate the angle in radians */
    let angleRad = collidePoint * Math.PI/4;

    let direction = (ball.x < canvas.width/2) ? 1 : -1;  // ensures ball moves in the proper direction when hit
    /* change velocity in X and Y */
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);
    /* ball increases speed on collision */ 
    ball.speed += 0.1;

    } 
};



// GAME RENDER

function render() {
    /* clear canvas */
    drawRect(0,0,canvas.width, canvas.height, "black");
    /*draw net*/
    drawNet();
    /*draw score*/
    drawText(player.score, canvas.width/4.5, canvas.height/5, "white");
    drawText(CPU.score, 3*canvas.width/4.1, canvas.height/5, "white");
    /*draw player and CPU paddles*/
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(CPU.x, CPU.y, CPU.width, CPU.height, CPU.color);
    /*draw ball*/
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
    
    /*decide whether to show end screen*/
    checkWin();
   

}

// BALL RESET

function resetBall(){
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;

}


// WINNING CONDITION //

let winningScore = 7;

function stopGame() {
    clearInterval(motion);
}


function checkWin() {
    
    if(CPU.score === winningScore) {
        drawText(player.win ="CPU", canvas.width/5.5, canvas.height/2, "red")
        drawText(CPU.win="WINS", 3*canvas.width/4.3, canvas.height/2, "red");
        stopGame();    
    }
    else if (player.score === winningScore) {   
        drawText(player.win ="YOU", canvas.width/5.5, canvas.height/2, "red")
        drawText(CPU.win="WIN", 3*canvas.width/4.3, canvas.height/2, "red");
        stopGame();     
    };   
};

// GAME INITIALISATION

function game(){
    render();   
    update();  
}
    
let framesPerSecond = 60;
let motion = setInterval(game, 1000/framesPerSecond);



// PAGE RELOAD

function hardReset() {
    location.reload();
}

// UPDATES //

// better hide cursor behaviour
// difficulty setting
// make scores transform into win text