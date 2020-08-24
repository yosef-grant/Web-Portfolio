function setRadius(newRadius) {
    
    (newRadius < minRadius) ? (newRadius = minRadius) : (newRadius > maxRadius) ? (newRadius = maxRadius) : (radius = newRadius);

    ctx.lineWidth = radius*2;
    radiusEl.innerText = radius;


}


let minRadius = 0.5,
    maxRadius = 100,
    defaultRadius = 10,
    interval=5,
    radiusEl = document.getElementById('radius-value'),
    decrease = document.getElementById('decrad'),
    increase = document.getElementById('incrad');


decrease.addEventListener('click', function() {
    setRadius(radius - interval);  // increments of 5
});

increase.addEventListener('click', () => {
    setRadius(radius + interval);
})


setRadius(defaultRadius);