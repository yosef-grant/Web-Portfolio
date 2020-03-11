const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20); // everything on the canvas is now scaled up x20




function arenaSweep() {  // checks for completed rows
    let rowCount = 1;
    /* using 'outer' and 'continue outer' prevents the loop from breaking on the first incomplete row, meaning completed rows above the incomplete one will now still be checked */
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {  // if a zero is present in the row, the row cannot be full
                continue outer;
            }
        }

        const row = arena.splice(y, 1)[0].fill(0); // this fills the completed row with zero's
        arena.unshift(row); // the 'empty' row is introduced at the top of the arena array
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;  // multiplier for completing more than one row at a time
    }
}


/* COLLISION DETECTION */

function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (arena[y + o.y] &&  // collision will be detected even in the absence of a row
                arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {  // while the piece is moving towards the bottom of the canvas
        matrix.push(new Array(w).fill(0));  
    }
    return matrix;
}

function createPiece(type)  // different numbers used for each shape enable shape-specific color mapping
{
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],  // extra row to provide a better rotation 'center' for a piece with a length of 4
        ];
    } else if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    } else if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if (type === 'O') {
        return [
            [4, 4],
            [4, 4],  // no rotation, so no need for 0 space
        ];
    } else if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) { // only none-zero values will be colored
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x,
                                 y + offset.y,
                                 1, 1);
            }
        });
    });
};

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    /*keep pieces displayed once they have reached the bottom of the canvas*/
    drawMatrix(arena, {x: 0, y: 0});
    drawMatrix(player.matrix, player.pos);
}

function merge(arena, player) {  // copies player data into the arena
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) { // 0 is empty space on the piece
                arena[y + player.pos.y][x + player.pos.x] = value;  // pushes the piece-shape into the matrix
            }
        });
    });
}

function rotate(matrix, dir) { 
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],  // use of javascript TUPLE
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ]; // transposing of matrix columns into rows which can then have their position flipped to effect a rotation
        }
    }

    if (dir > 0) {
        matrix.forEach(row => row.reverse());  // positive rotation
    } else {
        matrix.reverse();  // negative rotation
    }
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
    dropCounter = 0; // adds a 1s delay to further inputs once a piece has reached the bottom
}

function playerMove(offset) {
    player.pos.x += offset;
    if (collide(arena, player)) {
        player.pos.x -= offset; // prevents the piece from exiting the arena on either the right or left
    }
}

function playerReset() {
    const pieces = 'TJLOSZI';
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);  // "| 0" represents the floor() function
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
                   (player.matrix[0].length / 2 | 0);  // makes sure the player piece begins at the top-center
    if (collide(arena, player)) {
        arena.forEach(row => row.fill(0)); //removes everything from the arena, resets game
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir) {  // prevents the piece falling outside the arena on a rotate
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {  // the while loop allows a collision check on the rotate for successive moves; on a rotate-collision, the piece will be offset either -1 or +1
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        playerDrop();  // the player piece will now drop every second
    }

    lastTime = time;

    draw();
    requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById('tetris-score').innerText = player.score;
    
}

/* PLAYER CONTROLS */

document.addEventListener('keydown', event => {
    if (event.keyCode === 37) {
        playerMove(-1);
    } else if (event.keyCode === 39) {
        playerMove(1);
    } else if (event.keyCode === 40) {
        playerDrop();
    } else if (event.keyCode === 81 || 38) {
        playerRotate(-1);
    } else if (event.keyCode === 87) {
        playerRotate(1);
    }
});

const colors = [
    null,  // 0 in pieces represents blank space, therefore no color
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

const arena = createMatrix(12, 20);

const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};

function hardReset() {
    location.reload();
}

playerReset();
updateScore();
update();

// console.log(arena);  // useful to visually observe the created arrays in the console
// console.table(arena);


// IMPROVEMENTS //


// color gradients
// borders to imitate tetra style
// hit down cursor key to begin
