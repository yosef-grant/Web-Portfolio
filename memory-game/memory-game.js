
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let wait = false;
let buttons = document.querySelectorAll(".mem-button");
let lastKnownButtonId = undefined;
let lastKnownButtonNumber = undefined;
let matches = 0; 


/* 
----- Fisher-Yates algorithm -------

Iterates backwards through an array, moving each element of the array to a new location within the same array using
a random number generator to determine that new location

*/

for(i=0; i<buttons.length; i++) {
    
            buttons[i].addEventListener('click', function(e){
            let turnable = e.target.dataset.turnable;
            //first click

                if (!wait && lastKnownButtonId==undefined && lastKnownButtonNumber==undefined && turnable =="true") {
                        
                    e.target.dataset.turnable = 'false';
                    e.target.innerHTML = getImage(event.target.dataset.number);
                    e.target.style.backgroundImage = "url('memory-game/resources/background_select.jpg')";
                    lastKnownButtonId = e.target.id;
                    lastKnownButtonNumber = e.target.dataset.number;
                }

        //second click
                else if (!wait && lastKnownButtonId!= undefined && lastKnownButtonNumber != undefined 
                    && turnable =="true" && e.target.id != lastKnownButtonId) {

                    e.target.dataset.turnable = "false";
                    e.target.innerHTML = getImage(event.target.dataset.number);
        
        //match
                if(e.target.dataset.number == lastKnownButtonNumber) {
                    
                    e.target.style.backgroundImage = "url('memory-game/resources/background_match.jpg')";
                    document.getElementById(lastKnownButtonId).style.backgroundImage="url('memory-game/resources/background_match.jpg')";
                    lastKnownButtonId = undefined;
                    lastKnownButtonNumber = undefined;
                    matches++;
                        
                        if(matches == 8) {
                        showWinScreen();
                        }
                }    
            // no match
                else {

                    document.getElementById(lastKnownButtonId).style.backgroundImage = "url('memory-game/resources/background_noMatch.jpg')"
                    e.target.style.backgroundImage = "url('memory-game/resources/background_noMatch.jpg')";
                    wait = true;
                        setTimeout(() => {
                        e.target.dataset.turnable = "true";
                        e.target.style.backgroundImage = "url('memory-game/resources/background.jpg')";
                        e.target.innerHTML = getImage(0);
                        let tempLastClickedButton = document.getElementById(lastKnownButtonId)
                        tempLastClickedButton.dataset.turnable = "true";
                        tempLastClickedButton.style.backgroundImage = "url('memory-game/resources/background.jpg')";
                        tempLastClickedButton.innerHTML = getImage(0);
                        lastKnownButtonId = undefined;
                        lastKnownButtonNumber = undefined;
                        wait = false;
                    }, 1000);

            }
        }
        })
    };


function getImage(number) {
    switch(number) {
        case '1':
            return '<img src="memory-game/resources/card_1.png">';
        case '2':
            return '<img src="memory-game/resources/card_2.png">';
        case '3':
            return '<img src="memory-game/resources/card_3.png">';
        case '4':
            return '<img src="memory-game/resources/card_4.png">';
        case '5':
            return '<img src="memory-game/resources/card_5.png">';
        case '6':
            return '<img src="memory-game/resources/card_6.png">';
        case '7':
            return '<img src="memory-game/resources/card_7.png">';
        case '8':
            return '<img src="memory-game/resources/card_8.png">';
        default:
            return '<img src="memory-game/resources/card_back.png">';
    }
}

function showWinScreen(){
    let audio = document.getElementById("victory");
    audio.play();
    document.querySelector(".win-container").style.display="flex";

    document.getElementById("6").style.display="none";
    document.getElementById("7").style.display="none";
    document.getElementById("10").style.display="none";
    document.getElementById("11").style.display="none";

};
function distributeNumbers() {
    for(let i = 0; i < buttons.length; i++) {
            buttons[i].dataset.number = numbers[i]; // sets the dataset number in html to the shuffle number
    }
}

function arrayShuffle(arr) {
        let newPosition;
        let temp;
    for (let i = arr.length -1; i > 0; i--){  // arr.length - 1 starts the loop at last array elmnt
        newPosition = Math.floor(Math.random()*(i+1));  // *(i+1) to randomly assign for each element in the array
        temp = arr[i]; // temporarily store the new position in a temporary variable
        arr[i] = arr[newPosition];
        arr[newPosition] = temp; // the specified elements are now swapped
    }
    return arr;
};

function reset() {
    lastKnownButtonId = undefined;
    lastKnownButtonNumber = undefined;
    wait = false;
    arrayShuffle(numbers);
    distributeNumbers();
    matches = 0;

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].innerHTML = getImage(0);
        buttons[i].style.backgroundImage = "url('memory-game/resources/background.jpg')";
        document.querySelector('.win-container').style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("10").style.display = "block";
        document.getElementById("11").style.display = "block";
        console.log("reset");
    }

}

function hardReset() {
    location.reload();
}

arrayShuffle(numbers);
distributeNumbers();
console.log(numbers);





// updates //

// add difficulty setting with reset() on 3 wrong answers
// add timer 