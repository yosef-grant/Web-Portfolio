
$(document).ready(function() {
    //to do: draw a grid
    const connect4 = new Connect4('#connect_four')


$('#project-restart').click(function(){
    connect4.restart();
})

});

