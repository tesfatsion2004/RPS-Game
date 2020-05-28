console.log('I am in Tigrinya script');


//-----------------------------------------------------------
title_h1.innerHTML = 'ፀወታ ሞደሻ-ወረቐት-መቐስ';
title.innerHTML = 'ፀወታ ሞደሻ-ወረቐት-መቐስ';
user_lable.innerHTML = 'ተጠቃሚ';
computer_lable.innerHTML = 'ኮምፒተር';
result_p.innerHTML = 'ወረቐት ንሞደሻ ኣሸፊንዎ፤ ስዒርካ(ኪ)!!';
action_message.innerHTML = 'ጨወታ እናቐፀለ እዩ....';
language_p.innerHTML= "ናይ ፀወታ ቋንቋ ምረፅ(ፂ):";

userScore= 0;
computerScore = 0;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
//-----------------------------------------------------------

function getComputerChoice(){
    const choices = ['lr','lp' , 'ls'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'lr') return 'ሞደሻ';//return 'Rock';
    if(letter === 'lp') return 'ወረቐት';//return 'Paper';
   return 'መቐስ'; //return "Scissors";//if(letter === 'ls')
}

function win(userChoice, computerChoice){ 
    if((userScore < max_game) && (computerScore < max_game))
    {
        userScore++;
        userScore_span.innerHTML = userScore;
        count++;
    }  

    //computerScore_span.innerHTML = computerScore;
    if((userScore >= max_game)||(computerScore >= max_game))
        {
            if(userScore > computerScore)
            {
                action_message.innerHTML= 'እንኳዕ <u>ደስ</u> በሎም፤ ፀወታ <u>ኣሸኒፎም</u>!!';
            }

            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
                action_message.innerHTML = 'ፀወታ እናቐፀለ እዩ....';
            }, 3000);
        }

    result_p.innerHTML = `${convertToWord(userChoice)} ን${convertToWord(computerChoice)} ስዒርዎ፤ ተዓዊትካ(ኪ)!!`;
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

    //userScore_span.innerHTML = userScore;
    if((userScore >= max_game)||(computerScore>= max_game))
        {
            if(userScore < computerScore){
                action_message.innerHTML = '<u>በቲ ኮምፒተር</u> <u>ተሳዒሮም</u>፤ እንደገና ይሞክሩ!!';
            }

            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
                action_message.innerHTML = 'ፀወታ እናቐፀለ እዩ....';
            }, 3000);
            
        }

    result_p.innerHTML = `${convertToWord(userChoice)}  ብ${convertToWord(computerChoice)} ተሳዒሩ፤ ተሸኒፍካ(ኪ)!!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} ምስ ${convertToWord(computerChoice)} ማዕረ 'ዮም፤ ካሊእ ፀወታ ቀፅል!!`;
    
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log('----------------------------');
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