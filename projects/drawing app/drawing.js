let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let radius = 10;
let painting = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = radius*2;

function putPoint(e){
    if(painting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.offsetY);
    }
    console.log(painting)
};


function startPaint(e) {
    painting = true;
    putPoint(e);
}

function endPaint() {
    painting = false;
    ctx.beginPath();
}




canvas.addEventListener('mousedown', startPaint)
canvas.addEventListener('mousemove', putPoint)
canvas.addEventListener('mouseup', endPaint)
canvas.addEventListener('mouseout', endPaint)



function clearCanvas() {
    location.reload();
}



//updates//

// color selection
// eraser function