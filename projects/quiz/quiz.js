const start = document.getElementById("quiz-start"),
      quiz = document.getElementById("quiz-main"),
      qImg = document.getElementById("q-img"),
      question  = document.getElementById("q-question"),
      counter  = document.getElementById("q-counter"),
      timeGauge = document.getElementById("q-time-gauge"),
      optionA = document.getElementById("A"),
      optionB = document.getElementById("B"),
      optionC  = document.getElementById("C"),
      optionD = document.getElementById("D"),
      progress  = document.getElementById("q-progress"),
      scoreContainer  = document.getElementById("score-container"),
      restart = document.getElementById("q-restart"),
      scoreMessage = document.getElementById("score-message"),
      restartButton = document.getElementById("quiz-restart-button");

/* QUESTIONS Object Array */

let questions = [
    {
        question : "What do the initials of 36th US President LBJ stand for?",
        imgSrc : "quiz/img/edit/lbj.png",
        optionA: "Lyndon Baines Johnson",
        optionB: "Lyndon Bertrum Johnson",
        optionC: "Landon Blaire Johnson",
        optionD: "Lawrence Brian Jackson",
        correct: "A"
    },
    {
        question : "What is the capital city of Nigeria?",
        imgSrc : "quiz/img/edit/nigeria.png",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Enugu",
        optionD: "Sokoto",
        correct: "B"
    },

    {
        question : "What is the class of Soviet nuclear reactor responsible for the 1986 Chernobyl disaster? ",
        imgSrc : "quiz/img/edit/chernobyl.png",
        optionA: "PKM",
        optionB: "RMKR",
        optionC: "RBMK",
        optionD: "KBMR",
        correct: "C"
    },
    {
        question : "Who was Prime Minister of the UK after Winston Churchill left the office in 1945?",
        imgSrc : "quiz/img/edit/churchill.png",
        optionA: "Clement Attlee",
        optionB: "Anthony Eden",
        optionC: "Neville Chamberlain",
        optionD: "Harold MacMillan",
        correct: "A"
    },
    {
        question : "What is the best-selling video-game console of all time?",
        imgSrc : "quiz/img/edit/gaming.png",
        optionA: "Nintendo 64",
        optionB: "Xbox 360",
        optionC: "Nintendo DS",
        optionD: "PlayStation 2",
        correct: "D"
    },
    {
        question : "In Alexander Dumas's 1844 novel 'The Count of Monte Christo', what is the count's real name?",
        imgSrc : "quiz/img/edit/fleur.png",
        optionA: "Edouard de Villefort",
        optionB: "Edmond Dantes",
        optionC: "Albert de Morcerf",
        optionD: "Pierre Morrel",
        correct: "B"
    },
    {
        question : "The USMC Memorial in Virginia depicts the US flag being raised on which Pacific island?",
        imgSrc : "quiz/img/edit/iwo.png",
        optionA: "Peleliu",
        optionB: "Guadalcanal",
        optionC: "Iwo Jima",
        optionD: "Pavuvu",
        correct: "C"
    },

    {
        question : "Which one of the following car models is not manufactured by Ferrari?",
        imgSrc : "quiz/img/edit/ferrari.png",
        optionA: "Countach",
        optionB: "California",
        optionC: "Spider",
        optionD: "Scuderia",
        correct: "A"
    },
    {
        question : "What is the collective name given to a group of foxes?",
        imgSrc : "quiz/img/edit/fox.png",
        optionA: "Murder",
        optionB: "Skulk",
        optionC: "Knot",
        optionD: "Fever",
        correct: "B"
    },
    {
        question : "What is the technology used by submarines to detect objects underwater?",
        imgSrc : "quiz/img/edit/submarine.png",
        optionA: "Solar",
        optionB: "Sonar",
        optionC: "Strike",
        optionD: "Spike",
        correct: "B"
    },
    {
        question : "Who was the leader of the Soviet Union when the Berlin Wall came down in 1989?",
        imgSrc : "quiz/img/edit/berlin-wall.png",
        optionA: "Vyacheslav Molotov",
        optionB: "Nikita Khruschev",
        optionC: "Leonid Brezhnev",
        optionD: "Mikhail Gorbachev",
        correct: "D"
    },
    {
        question : "Which of the following saints is not represented on the Union Jack?",
        imgSrc : "quiz/img/edit/union.png",
        optionA: "St. Andrew",
        optionB: "St. Patrick",
        optionC: "St. Peter",
        optionD: "St George",
        correct: "C"
    },
    {
        question : "Which of the following is not a character from The Tales of King Arthur?",
        imgSrc : "quiz/img/edit/arthur.png",
        optionA: "The Red Knight",
        optionB: "Sir Gawain",
        optionC: "Guinevere",
        optionD: "Merlin",
        correct: "A"
    }
];

start.addEventListener('click', startQuiz);


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTime = 0; //seconds
const gaugeWidth = 150; //px
const gaugeUnit = gaugeWidth / 10
let timer;
let score = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "<p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = "<p>" + q.optionA + "</p>";
    optionB.innerHTML = "<p>" + q.optionB + "</p>";
    optionC.innerHTML = "<p>" + q.optionC + "</p>";
    optionD.innerHTML = "<p>" + q.optionD + "</p>";
};



// progress bar

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter

function renderCounter() {
    if(count >= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + 'px';
        count--
    }else {
        count = 10;
        incorrectAnswer();
        
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else{
        
        clearInterval(timer);
        scoreRender();
    }

}};



//check answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        console.log("correct");
        // change progress color to green
        correctAnswer();  
    }else{
        console.log("incorrect");
        // answer is wrong
        // change progress color to red
        incorrectAnswer();
    }
    count = 10
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(timer);
        scoreRender();
    }
}

function correctAnswer() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function incorrectAnswer() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}


//score

function scoreRender() {
    quiz.style.display = "none";
    scoreContainer.style.display = "flex";
    scoreMessage.style.display = "flex";
    restartButton.style.display = "flex";
    // calculate % correct answers
    const scorePercent = Math.round(100*score/questions.length);
    if (scorePercent == 100) {
        scoreMessage.innerHTML += "<h4>" + "Impressive!" + "</h4>";
    }
    else if (scorePercent >= 85 ) {
        scoreMessage.innerHTML += "<h4>" + " Well Done!" + "</h4>";
    }
    else if (scorePercent >= 75) {
        scoreMessage.innerHTML += "<h4>" + "  Good Job!" + "</h4>";
    }
    else if (scorePercent >= 65) {
        scoreMessage.innerHTML += "<h4>" + " Nice Try!" + "</h4>";
    }
    else if (scorePercent >= 50) {
        scoreMessage.innerHTML += "<h4>" + "  Not bad!" + "</h4>";
    }
    else {
        scoreMessage.innerHTML += "<h4>" + " Try Again!" + "</h4>"
    }
    
    scoreContainer.innerHTML += "<p>" + scorePercent + "%" + "</p>";
        
}

// start quiz 



function startQuiz() {

start.style.display = "none";
quiz.style.display = "grid";
renderQuestion();
renderProgress();
renderCounter();
timer = setInterval(renderCounter, 1000);

}

function restartQuiz() {
    location.reload();
}

function hardReset() {
    location.reload();
}


// function restartQuiz() {
//     scoreContainer.style.display = "none";
    
//     scoreContainer.innerHTML = "";
//     score = 0;
//     count = 0;
//     runningQuestion = 0;
//     progress.innerHTML = "";
//     startQuiz();
// }


/* UPDATES */

// categories of question
// difficulty levels (increase timer)
// add restart button
// fix delay in timer before next q

