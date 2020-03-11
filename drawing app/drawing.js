window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");  // provides context to allow 'drawing' onto canvas

    var canvasOffset = $("canvas").offset();

    let painting = false;


    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();  // allows multiple drawings on the same canvas without them joining up
    }

    
    

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'; // creates a circular stroke
        ctx.lineTo(e.clientX - canvasOffset.left, e.clientY - canvasOffset.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvasOffset.left, e.clientY - canvasOffset.top);
    }
    // event listeners

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseout', endPosition);
    
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    

});

function clearCanvas() {
    location.reload();
}



//updates//

// color selection
// eraser function