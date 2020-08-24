const game = () => {
    
    let pScore = 0;
    let cScore = 0;

// Start the game //

const startGame = () => {

    const playButton = document.querySelector(".rps-intro button");
    const scorePanel = document.querySelector(".rps-score");
    const introScreen = document.querySelector(".rps-intro");
    const matchScreen = document.querySelector(".rps-match");


    playButton.addEventListener('click', () => {
        introScreen.classList.add("fadeOut");
        scorePanel.classList.add("fadeIn");
        matchScreen.classList.add("fadeIn");
    })
};

 // Play Match //

 const playMatch = () => {
     const options = document.querySelectorAll(".options button");
     const playerHand = document.querySelector(".player-hand");
     const cHand = document.querySelector(".CPU-hand");
     const hands = document.querySelectorAll(".hands img");

     hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
     
    // CPU Options - a random number generator for numbers 1 to 3, each assigned to either rock, paper or scissors //
    const computerOptions = 
    [
        'rock', 
        'paper', 
        'scissors'
    ];
    

    options.forEach(option => {
        
        option.addEventListener("click", function() {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber]; // randomly picks out an array index 
            
            setTimeout(() => {
            // This is where checkScore will be called
            checkScore(this.textContent, computerChoice);
            //update images

        playerHand.src = `rock paper scissors/assets/player/${this.textContent}.png`;
        cHand.src = `rock paper scissors/assets/${computerChoice}.png`;
            }, 1800);
             
                 playerHand.src = `rock paper scissors/assets/player/rock.png`; // this reverts both hands back to 'rock' after the match
                 cHand.src = `rock paper scissors/assets/rock.png`;
            
        playerHand.style.animation = "shakePlayer 2s ease"
        cHand.style.animation = "shakeComputer 2s ease"
        });
    });    
 };


 const updateScore = () => {
     const playerScore = document.querySelector(".player-score p");
     const ComputerScore = document.querySelector(".CPU-score p");
     playerScore.textContent = pScore;
     ComputerScore.textContent = cScore;

     
     
 }

 
 const checkScore = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".rps-winner");
        // checking for a tie
        if (playerChoice===computerChoice){
            winner.textContent = "It's a tie!";
            
            return;
        } 
        // Checking for Rock
        if (playerChoice==="rock") {
            if (computerChoice==="scissors") {
                winner.textContent= "Player Wins!";
               
                pScore++;
                updateScore();
                    return;
            }
            else{
                winner.textContent= "CPU Wins!";
                
                cScore++;
                updateScore();
                    return;
            }   
        }
        // Checking for Paper
        if (playerChoice==="paper") {
            if (computerChoice==="rock"){
                winner.textContent="Player Wins!";
                
                pScore++;
                updateScore();
                    return;
            }
            else {
                winner.textContent="CPU Wins!";
                
                cScore++;
                updateScore();
                    return;
            }
        }
        // Checking for Scissors 
        if (playerChoice==="scissors") {
            if (computerChoice==="paper") {
                winner.textContent="Player Wins!";
                
                pScore++;
                updateScore();
                    return;
            }
            else {
                winner.textContent="CPU Wins!"
                
                cScore++;
                updateScore();
                ;
            }
        }
        
    }

startGame();
playMatch();



};

game();

const hardReset = () => {
    location.reload();
}; 


// add end-game state

