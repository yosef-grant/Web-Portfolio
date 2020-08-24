let colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


// create swatches

for (let i = 0, n=colors.length; i<n; i++) {
    let swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
    ctx.fillStyle = color ;
    ctx.strokeStyle = color;

    let active = document.getElementsByClassName('active')[0];
    if(active){
        active.className = 'swatch';
    }
}


function setSwatch(e) {

    let swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]})  // ensures the page loads with a swatch seen as 'active'


// updates //

/* savefile option */