/*let userScore = 0;
let computerScore = 0;
let count = 0;

//Caching dom- means caching the dom for future use
let userScore_span= document.getElementById("user-score");
let computerScore_span= document.getElementById("computer-score");

const scoreBoard_div= document.querySelector(".score-board");

let result_p = document.querySelector(".results>p");

//References to the image div's (RPS)
const left_rock_div = document.getElementById("lr");
const left_paper_div = document.getElementById("lp");
const left_scisor_div = document.getElementById("ls");

//-----------------------------------------------------------
let title_h1 = document.querySelector('header>h1');
title_h1.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
let title = document.querySelector('head>title');
title.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
let user_lable= document.getElementById('user-lable');
user_lable.innerHTML = 'ተጠቃሚ';
let computer_lable = document.getElementById('computer-lable');
computer_lable.innerHTML = 'ኮምፒተር';
result_p.innerHTML = 'ወረቐት ንከውሒ ሸፊንዎ፤ ስዒርካ(ኪ)!!';
let action_message = document.getElementById('action-message');
action_message.innerHTML = 'ጨወታ እናቐፀለ እዩ....';
//let form_en_radio = document.getElementById('en');
//console.log(form_en_radio.innerHTML);
//form_en_radio.innerHTML= 'እንግሊዘኛ';
//console.log(form_en_radio.innerHTML);
//let form_tg_radio = document.getElementById('tg');
//console.log(form_tg_radio.innerHTML);
//form_tg_radio.innerHTML= 'ትግርኛ';
//console.log(form_tg_radio.innerHTML);
//let form_am_radio = document.getElementById('am');
//console.log(form_am_radio.innerHTML);
//form_am_radio.innerHTML= 'ኣማርኛ';
//console.log(form_am_radio.innerHTML);

let language_p= document.getElementById('language-lable');
console.log(language_p.innerHTML);
language_p.innerHTML= "ናይ ፀወታ ቋንቋ ምረፅ(ፂ):";
console.log(language_p);

console.log(action_message.innerHTML);
//console.log(result_p.innerHTML);
//console.log('computer:' + computer_lable.innerHTML);
//console.log('computer:' + computer_lable.innerHTML);
//console.log('User lable: ' + user_lable.innerHTML);
//console.log('ሙከራ = ' + title.innerHTML);
//title.innerHTML = 'የኣለት ወረቀት መቀስ ጨዋታ';
*/
//Optional page loading based the language of choice
console.log('I am at the beginning of app.js');
//-------------------Beginning----------------------
let script= document.querySelector("script");
let radios = document.getElementsByName('language-option');
for(let i = 0, max = radios.length; i < max; i++) {
    //alert(this.value);
    radios[i].onclick = function() {
        if(this.value == 'English')
        {
            //window.location.reload();
            //console.log(this.value);
            //lang_reset("English", this);
            //this.checked[i] = true;

            console.clear();
            console.log(script);
            if(!script)
            {
                document.head.removeChild(script);//Removes the current *.js file where *=en/tg/am from the DOM tree
                //script.src = "./language/en.js";
                script = document.createElement("script");
                script.type = "text/javascript";
                script.setAttribute("src", "app.js");
            }
            
            //title_h1.innerHTML = 'Rock Paper Scissors Game';
            userScore= 0;
            computerScore= 0;
            //userScore_span.innerHTML = userScore;
            //computerScore_span.innerHTML = computerScore;
            //alert(this.value);
        }
        else if(this.value == 'Tigrinya')
        {
            //window.location.reload();
            //console.log(this.value);
            //lang_reset('Tigrinya', this);
            //this.checked[i] = true;
            script.src = "./language/tg.js";
            //title_h1.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
            userScore= 0;
            computerScore= 0;
            //userScore_span.innerHTML = userScore;
            //computerScore_span.innerHTML = computerScore;
            //alert(this.value);
        }
        else if(this.value == 'Amharic')
        {
            //window.location.reload();
            //this.checked[i] = true;
            //console.log(this.value);
            //lang_reset('Amharic', this);
            script.src = "./language/am.js";
            //title_h1.innerHTML = 'የኣለት-ወረቀት-መቀስ ጨዋታ';
            userScore= 0;
            computerScore= 0;
            //userScore_span.innerHTML = userScore;
            //computerScore_span.innerHTML = computerScore;
            //alert(this.value);
        }
        else{//Default
            //window.location.reload();
            //this.checked[0] = true;
            //console.log(this.value);
            //lang_reset('English', this);
            script.src = "./language/en.js";
            alert('default: '+this.value);
            userScore= 0;
            computerScore= 0;
            //userScore_span.innerHTML = userScore;
            //computerScore_span.innerHTML = computerScore;
        }
    };
}
console.log('--------------------------------------');
console.log(script);
document.body.appendChild(script);//Loads new *.js file into the DOM tree, overwriting all functions and variables of the existing *.js file in browser memory to null
//Languaging reloading
/*
function lang_reset(lang, obj)
{    
    if(lang == 'English'){
        title_h1.innerHTML = 'Rock Paper Scissors Game';
        title.innerHTML = 'Rock Paper Scissors Game';
        user_lable.innerHTML = 'User';
        computer_lable.innerHTML = 'Computer';
        result_p.innerHTML = 'Paper beats rock; You WON!!';
        action_message.innerHTML = 'Game continuting....';
        console.log(obj.value);
    }
    else if(lang == 'Tigrinya'){
        title_h1.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
        title.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
        user_lable.innerHTML = 'ተጠቃሚ';
        computer_lable.innerHTML = 'ኮምፒተር';
        result_p.innerHTML = 'ወረቐት ንከውሒ ሸፊንዎ፤ ስዒርካ(ኪ)!!';
        action_message.innerHTML = 'ጨወታ እናቐፀለ እዩ....';
        console.log(obj.value);
    }
    else if(lang == 'Amharic'){
        title_h1.innerHTML = 'የኣለት-ወረቀት-መቀስ ጨዋታ';
        title.innerHTML = 'የኣለት-ወረቀት-መቀስ ጨዋታ';
        user_lable.innerHTML = 'ተጠቃሚ';
        computer_lable.innerHTML = 'ኮምፒተር';
        result_p.innerHTML = 'ወረቀት ኣለትን ኣሸነፈው፤ ተሸንፈሃል(ሻል)!!';
        action_message.innerHTML = 'ጨዋታ እየቀጠለ ነው....';
        console.log(obj.value);
    }
    else{
        title_h1.innerHTML = 'Rock Paper Scissors Game';
        title.innerHTML = 'Rock Paper Scissors Game';
        user_lable.innerHTML = 'User';
        computer_lable.innerHTML = 'Computer';
        result_p.innerHTML = 'Paper beats rock; You WON!!';
        action_message.innerHTML = 'Game continuting....';
        console.log(obj.value);
    }



}*/
//------------------End----------------------------
//-----------default values-------




console.log('I am at the end of app.js');
/*
let userScore = 0;
let computerScore = 0;
let count = 0;


//Caching dom- means caching the dom for future use
let userScore_span= document.getElementById("user-score");
let computerScore_span= document.getElementById("computer-score");

const scoreBoard_div= document.querySelector(".score-board");

let result_p = document.querySelector(".results>p");

//References to the image div's (RPS)
const left_rock_div = document.getElementById("lr");
const left_paper_div = document.getElementById("lp");
const left_scisor_div = document.getElementById("ls");

//-----------------------------------------------------------
let title_h1 = document.querySelector('header>h1');
title_h1.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
let title = document.querySelector('head>title');
title.innerHTML = 'ፀወታ ከውሒ-ወረቐት-መቐስ';
let user_lable= document.getElementById('user-lable');
user_lable.innerHTML = 'ተጠቃሚ';
let computer_lable = document.getElementById('computer-lable');
computer_lable.innerHTML = 'ኮምፒተር';
result_p.innerHTML = 'ወረቐት ንከውሒ ሸፊንዎ፤ ስዒርካ(ኪ)!!';
let action_message = document.getElementById('action-message');
action_message.innerHTML = 'ጨወታ እናቐፀለ እዩ....';

//let form_en_radio = document.getElementById('en');
//console.log(form_en_radio.innerHTML);
//form_en_radio.innerHTML= 'እንግሊዘኛ';
//console.log(form_en_radio.innerHTML);
//let form_tg_radio = document.getElementById('tg');
//console.log(form_tg_radio.innerHTML);
//form_tg_radio.innerHTML= 'ትግርኛ';
//console.log(form_tg_radio.innerHTML);
//let form_am_radio = document.getElementById('am');
//console.log(form_am_radio.innerHTML);
//form_am_radio.innerHTML= 'ኣማርኛ';
//console.log(form_am_radio.innerHTML);

let language_p= document.getElementById('language-lable');
console.log(language_p.innerHTML);
language_p.innerHTML= "ናይ ፀወታ ቋንቋ ምረፅ(ፂ):";
console.log(language_p);

console.log(action_message.innerHTML);
//console.log(result_p.innerHTML);
//console.log('computer:' + computer_lable.innerHTML);
//console.log('computer:' + computer_lable.innerHTML);
//console.log('User lable: ' + user_lable.innerHTML);
//console.log('ሙከራ = ' + title.innerHTML);
//title.innerHTML = 'የኣለት ወረቀት መቀስ ጨዋታ';


//-----------------------------------------------------------

function getComputerChoice(){
    const choices = ['lr','lp' , 'ls'];
    const randomNumber = Math.floor(Math.random()*3);
    //console.log("Computer choice: " + choices[randomNumber]);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'lr') return 'ከውሒ';//return 'Rock';
    if(letter === 'lp') return 'ወረቐት';//return 'Paper';
   return 'መቐስ'; //return "Scissors";//if(letter === 'ls')
}
//console.log(getComputerChoice());//Helps to check if randdom number is being generated
function win(userChoice, computerChoice){   

    //console.log('USER WON!!');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if((userScore >= 20)||(computerScore>=20))
        {
            if(userScore == computerScore) console.log('You and the computer are equal');
            else if(userScore>computerScore) console.log('You have won the game. Congratulations!!. Keep playing...');
            else console.log('You have lost the game. Try again');
            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
            }, 3000);
        }
    //computerScore++;
    //const smallUserWord = "user".fontsize(3).sub();//OR sup()
    // smallCompWord = "comp".fontsize(3).sub();//OR sup()
    //const smallUserWord = "ተጠቃሚ".fontsize(3).sub();//OR sup()
    //const smallCompWord = "ኮምፒተር".fontsize(3).sub();//OR sup()
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ን${convertToWord(computerChoice)}${smallCompWord} ስዒርዎ. ተዓዊትካ(ኪ)!`;
    result_p.innerHTML = `${convertToWord(userChoice)} ን${convertToWord(computerChoice)} ስዒርዎ፤ ተዓዊትካ(ኪ)!!`;
    //console.log(userScore);
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    userScore++;
    count++;
}
function lose(userChoice, computerChoice){
    //console.log('USER LOST!!');
    //userScore++;
    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if((userScore >= 20)||(computerScore>=20))
        {
            if(userScore == computerScore) console.log('You and the computer are equal');
            else if(userScore>computerScore) console.log('You have won the game. Congratulations!!. Keep playing...');
            else console.log('You have lost the game. Try again');
            if(userScore > computerScore)
            {
                action_message.innerHTML= 'እንኳዕ ደስ በለካ(ኪ)';
            }
            else if(userScore < computerScore){
                action_message.innerHTML = 'ንሐዚ ኣይተሳኸዐልካን(ኪን)፤ እንደገና ሞክር(ሪ)!!';
            }
            else{
                action_message.innerHTML = 'ምስታ ኮምፒተር ማዕረ ወፂኹም፤ እንደገና ሞክር(ሪ)!!';
            }
            setTimeout(() => {
                userScore= 0;
                computerScore = 0;
                userScore_span.innerHTML = userScore;
                computerScore_span.innerHTML = computerScore;
                action_message.innerHTML = 'ጨወታ እናቐፀለ እዩ....';
            }, 3000);
            
        }
    
    //const smallUserWord = "user".fontsize(3).sub();//OR sup()
    //const smallCompWord = "comp".fontsize(3).sub();//OR sup()
    //const smallUserWord = "ተጠቃሚ".fontsize(3).sub();//OR sup()
    //const smallCompWord = "ኮምፒተር".fontsize(3).sub();//OR sup()

    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  ብ${convertToWord(computerChoice)}${smallCompWord} ተሳዒሩ. ተሸኒፍካ(ኪ)!`;
    result_p.innerHTML = `${convertToWord(userChoice)}  ብ${convertToWord(computerChoice)} ተሳዒሩ፤ ተሸኒፍካ(ኪ)!!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    computerScore++;
    count--;
}
function draw(userChoice, computerChoice){
    //console.log('USER LOST!!');
    //userScore++;
    //computerScore++;
    //userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    //const smallUserWord = "ተጠቃሚ".fontsize(3).sub();//OR sup()
    //const smallCompWord = "ኮምፒተር".fontsize(3).sub();//OR sup()
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It is a draw!`;
    //result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ምስ ${convertToWord(computerChoice)}${smallCompWord} ማዕረ ኮይኖም. ካሊእ ፀወታ ቀፅል!`;
    result_p.innerHTML = `${convertToWord(userChoice)} ምስ ${convertToWord(computerChoice)} ማዕረ 'ዮም፤ ካሊእ ፀወታ ቀፅል!!`;
    
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    //console.log('user choice: ' + userChoice);
    //console.log('computer choice: ' + computerChoice);
    console.log('----------------------------');
    switch(userChoice+computerChoice){
        case 'lrls':
        case 'lslp':
        case 'lplr':
            //console.log('USER WINS!!');
            win(userChoice, computerChoice);
            break;
        case 'lslr':
        case 'lpls':
        case 'lrlp':
            //console.log('USER LOSES!!');
            lose(userChoice, computerChoice);
            break;
        case 'lrlr':
        case 'lsls':
        case 'lplp':
            //console.log('It is a draw!!');
            draw(userChoice, computerChoice);
            break;        
    }
}

//Main is the first function to have been built
function main(){

    //Lets add event listeners to the rock, paper and scisors to listen which one was clicked
    left_rock_div.addEventListener('click', ()=>{
        game('lr');
        //console.log("Hey rock was clicked");
    });
    left_paper_div.addEventListener('click', ()=>{
        game('lp');
        //console.log("Hey paper was clicked");
    });
    left_scisor_div.addEventListener('click', ()=>{
        game('ls');
        //console.log("Hey scissors was clicked");
    });
}


main();
*/