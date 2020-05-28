console.log('I am in english version');
//-----------------------------------------------------------
title_h1.innerHTML = 'Rocker Paper Scisssors Game';//'ፀወታ ከውሒ-ወረቐት-መቐስ';
title.innerHTML = 'Rock Paper Scissors Game';
user_lable.innerHTML = 'User';
computer_lable.innerHTML = 'Computer';
result_p.innerHTML = 'Paper beats Rock; You WON!!';
action_message.innerHTML = 'Game is continuing....';
language_p.innerHTML= "Choose a language of your choice:";

userScore= 0;
computerScore = 0;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;

var allsuspects= document.getElementsByTagName('script');
for (var i=allsuspects.length-1; i >= 0; i--){ //search backwards within nodelist for matching elements to remove
    console.log(i, allsuspects[i]);
  }
  console.log('count: ' + allsuspects.length);
//-----------------------------------------------------------

function getComputerChoice(){
    const choices = ['lr','lp' , 'ls'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'lr') return 'Rock';
    if(letter === 'lp') return 'Paper';
    return "Scissors";//if(letter === 'ls')
}

function win(userChoice, computerChoice){

    if((userScore < max_game) && (computerScore < max_game))
    {
        userScore++;
        userScore_span.innerHTML = userScore;
        count++;
    }

    if((userScore >= max_game)||(computerScore >= max_game))
        {    
            if(userScore > computerScore)
            {
                action_message.innerHTML= '<u>Congratulations</u>, <u>YOU</u> have <u>WON</u> the GAME!!';
            }

            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
                action_message.innerHTML = 'The game is continuing....';
            }, 3000);
        }
    result_p.innerHTML = `The ${convertToWord(userChoice)} defeats the ${convertToWord(computerChoice)}; You WON!!`;
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
    
}
function lose(userChoice, computerChoice){

    if((userScore < max_game) && (computerScore < max_game))
    {
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        count--;
    }

    if((userScore >= max_game)||(computerScore>= max_game))
        {
            if(userScore < computerScore){
                action_message.innerHTML = '<u>YOU</u> are <u>DEFEATED</u> by the computer; Try again!!';
            }
            
            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
                action_message.innerHTML = 'The game is continuing....';
            }, 3000);
            
        }

    result_p.innerHTML = `${convertToWord(userChoice)}  beats ${convertToWord(computerChoice)}; You LOST!!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice){

    result_p.innerHTML = `The ${convertToWord(userChoice)} equals the ${convertToWord(computerChoice)}; Have a try again!!`;
    
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case 'lrls':
        case 'lslp':
        case 'lplr':
            win(userChoice, computerChoice);
            break;
        case 'lslr':
        case 'lpls':
        case 'lrlp':
            lose(userChoice, computerChoice);
            break;
        case 'lrlr':
        case 'lsls':
        case 'lplp':
            draw(userChoice, computerChoice);
            break;        
    }
}

//Main is the first function to have been built
function main(){
    userScore = 0;
    computerScore = 0;
    count = 0;

    left_rock_div.addEventListener('click', ()=>{
        game('lr');
    });
    left_paper_div.addEventListener('click', ()=>{
        game('lp');
    });
    left_scisor_div.addEventListener('click', ()=>{
        game('ls');
    });
}


main();