const cvs = document.getElementById("snake-canvas");
const ctx = cvs.getContext("2d");


// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "snake/img/ground.png";

const foodImg = new Image();
foodImg.src = "snake/img/food.png";

// load audio files


// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
       
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
       
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
       
    }
}

// check collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
            
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        let snakeBodyColor = window.getComputedStyle(document.documentElement).getPropertyValue('--bg-dark');
        let snakeHeadColor = window.getComputedStyle(document.documentElement).getPropertyValue('--default-dark');
        ctx.fillStyle = ( i == 0 ) ? snakeHeadColor : snakeBodyColor;
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "#black";
        ctx.lineCap = "round";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        score = "Game Over!";
        
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--default-light');
    ctx.font = "45px 'Inconsolata', monospace";
    ctx.fillText(score,2*box,1.6*box);
}



// how often to call draw function, determines 'speed' of the game

let game = setInterval(draw,100);

function hardReset() {
    location.reload();
}
// UPDATES //

// prevent jewel from appearing within snake




