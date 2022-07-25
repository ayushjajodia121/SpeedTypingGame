window.addEventListener('load',init);



//available levels
const levels={
    easy:5,
    medium:3,
    hard:2
}
// const currentLevel = $('#levels').checked("input[type='radio'][name='level']:checked").val();
const currentLevel = levels.medium;
//Globals

// let time;
// if(currentLevel=='5'){
//     time=5;
// }else if(currentLevel=='4'){
//     time=4;
// }else{
//     time=2;
// }
let time= currentLevel;
let score=0;
let isPlaying;
let highestScore;
//DOM Elements

const wordInput = document.querySelector('#word-input');
const gTimer = document.querySelector('#seconds');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const currentWord = document.querySelector('#current-word');
const message = document.querySelector('#message');
const highScore = document.querySelector('#highscore');

const words = ['acronym','address','affect','alter','annotate','anticipate','articulate','assume','assumption','character','citation','influence','inquire','evidence','correspond','demonstrate','correlate','exository','cumulative','foreshadow','imitate','equivalent','hypothesize','illustrate','defend','discipline','devise','formulate','category','footer','approach','allocate','contradict','pursue','analyze','reinforce','faciliate','implement'];
//initialize game

function init(){
    if(currentLevel==undefined){
        alert("please select difficulty level");
    }
    window.sessionStorage.setItem('highScore',0);
    console.log("chl gya h bhai");
    //load word form array
    showWord(words);
    //start matchiung on word input
    wordInput.addEventListener('input',startMatch);
    //call countdown every single second
    setInterval(countdown,1000);

    //check status of playing
    setInterval(checkStatus,50);
}

function startMatch(){
    if(matchWords()){
        isPlaying=true;
        time=currentLevel+1;
        showWord(words);
        wordInput.value='';
        score++;
    }
    highScore.innerHTML
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
        scoreDisplay.innerHTML=score;
    }
    
}
//match current word from input word
function matchWords(){
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML='correct!!';
        return true;
    }
    else{
        message.innerHTML=' ';
        return false;
    }
}
//pick and show random word
function showWord(words)
{
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length )
    //output a random word
    currentWord.innerHTML= words[randIndex];
}

//Countdown Timer
function countdown(){
    //check time is not run out
    if(time>0)
    {
        //decrement timer
        time--;
    }else if(time===0){
        isPlaying=false;
    }
    //show time
    timeDisplay.innerHTML=time;
}
function checkStatus(){
    if(!isPlaying && time===0)
    {
        let hiScore = sessionStorage.getItem('highScore'); 
        if(score>hiScore){
            sessionStorage.setItem('highScore',score);
        }
        message.innerHTML = 'Game Over !!';
        score=-1;
        highScore.innerHTML=sessionStorage.getItem('highScore');
        // console.log(hiScore);
        // highScore.innerHTML = hiScore;
    }
}