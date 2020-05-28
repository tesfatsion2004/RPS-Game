
const max_game= 20;//Maximum number for the use to either win(user score) or lose (computer score) the game
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
let title = document.querySelector('head>title');
let user_lable= document.getElementById('user-lable');
let computer_lable = document.getElementById('computer-lable');
let action_message = document.getElementById('action-message');
let language_p= document.getElementById('language-lable');

let script_src= document.getElementById('myScript').src;

const bodyID = document.getElementsByTagName("body")[0];
let lang_script = document.getElementById('myScript');// = document.createElement('script');

const en_lang = document.getElementById('English');
const tg_lang = document.getElementById('Tigrinya');
const am_lang = document.getElementById('Amharic');
//---------------------------------------------------------


//---------------------------------------------------------

//My default game in English
userScore= 0;
computerScore = 0;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
/*
if(lang_script)
{
    
    lang_script = document.createElement('script');
    lang_script.setAttribute("src", "./language/en.js");
    console.log('src: ' + lang_script.src);
    lang_script.type = 'text/javascript';
    bodyID.appendChild(lang_script);

    en_lang.innerHTML= 'English';
    tg_lang.innerHTML= 'Tigrinya';
    am_lang.innerHTML= 'Amharic';

    console.log(en_lang.innerHTML);
    console.log(tg_lang.innerHTML);
    console.log(am_lang.innerHTML);

    console.log('src: ' + lang_script.src);
    console.log('I am app--callback-en.');           
}*/
//----------end-of-default--------------------------------
 


    en_lang.onclick= function(){
        const note_title= document.getElementById('note-title');
        note_title.innerHTML= '<u>Note፡</u>';
        const note= document.getElementById('note');
        note.innerHTML= 'Rule of the game: if you want to change your language option, refresh the page first. The game has some bug to fix. Selecting two or more languages without refreshing gives erranous resluts. Please fix the program if you can. Procedure: 1) Click \'Refresh\' button 2) Choose language 3) Play.';
        userScore= 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        //if (lang_script && lang_script.getAttribute('src')!=null && lang_script.getAttribute('src').indexOf(oldfilename)!=-1)
        const src_attr= lang_script.getAttribute('src');
        const indexof_en= 'http://127.0.0.1:3000/language/en.js';
        const indexof_tg= 'http://127.0.0.1:3000/language/tg.js';
        const indexof_am= 'http://127.0.0.1:3000/language/am.js';

        if (lang_script && src_attr!=null)
        {
            if(src_attr.indexOf(indexof_en)== -1 || src_attr.indexOf(indexof_tg)!= -1 || src_attr.indexOf(indexof_am)!=-1)
            //if(lang_script)
            {
                console.log('----in english------');
                const new_script = document.createElement('script');
                new_script.setAttribute("src", "./language/en.js");
                new_script.id= 'myScript';
                new_script.type = 'text/javascript';
                lang_script.parentNode.replaceChild(new_script, lang_script);  
                lang_script.remove();
                lang_script= new_script;
                //bodyID.appendChild(lang_script);

                en_lang.innerHTML= 'English';
                tg_lang.innerHTML= 'Tigrinya';
                am_lang.innerHTML= 'Amharic';
            
                console.log('src: ' + lang_script.src);
                console.log('I am app--callback-en.'); 
                //action_message.innerHTML= 'Game continuing in English';

                [].forEach.call( document.querySelectorAll("script[src]"), function( src ) {
      
                    console.log( src );
                  });
            } 
        }

    };
 
    tg_lang.onclick= function(){
        const note_title= document.getElementById('note-title');
        note_title.innerHTML= '<u>መዘኻኸሪ፡</u>';
        const note= document.getElementById('note');
        note.innerHTML= 'ፀወታ ሕጊ፡ ቋንቋ ንምቕያር \'ምሕዳስ\' ዝብል በተን ፅቐጥ(ጢ)፤ እቲ ኣፕሊኬሽን ንኡሽተይ ፀገም ስለዘለዎ እንተኽኢሎም የስተኻኸልዎ፤ በተን ከይፀቐጡ ቋንቋ ምምራፅ ዘይትኽክል ውፅኢት ስለዝህብ \'ምሕዳስ\' ዝብል በተን ምስ ነኽኡ ቋንቋ ይምረፁ። ከይዲ፦ 1) \'ምሕዳስ\' 2) ቋንቋ ምረፅ 3) ተፃወት';
        userScore= 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        //if (lang_script && lang_script.getAttribute('src')!=null && lang_script.getAttribute('src').indexOf(oldfilename)!=-1)
        const src_attr= lang_script.getAttribute('src');
        const indexof_en= 'http://127.0.0.1:3000/language/en.js';
        const indexof_tg= 'http://127.0.0.1:3000/language/tg.js';
        const indexof_am= 'http://127.0.0.1:3000/language/am.js';

        if (lang_script && src_attr!=null)
        {
            if(src_attr.indexOf(indexof_en)== -1 || src_attr.indexOf(indexof_tg)!= -1 || src_attr.indexOf(indexof_am)!=-1)
            //if(lang_script)
            {
                console.log('----in Tgirinya------');
                const new_script = document.createElement('script');
                new_script.id= 'myScript';
                new_script.setAttribute("src", "./language/tg.js");
                lang_script.parentNode.replaceChild(new_script, lang_script);
                lang_script.remove();
                lang_script= new_script;
                //bodyID.appendChild(lang_script);

                en_lang.innerHTML= 'እንግሊዘኛ';
                tg_lang.innerHTML= 'ትግርኛ';
                am_lang.innerHTML= 'ኣምሓርኛ';
            
                console.log('src: ' + lang_script.src);
                console.log('I am app--callback-tg.'); 
                //action_message.innerHTML= 'ፀወታ ብትግርኛ እናቐፀለ እዩ.....';
            } 
        }      
    };
    
    am_lang.onclick= function(){

        const note_title= document.getElementById('note-title');
        note_title.innerHTML= '<u>ማስታወሻ፡</u>';
        const note= document.getElementById('note');
        note.innerHTML= 'የጨዋታ ሕግ፡ ቋንቋን ለመቀየር \'ኣድስ\' የሚል በተን ተጫን(ኚ)፤ ኣፕሊኬሽኑ ትንሽ ጭግር ስላለው ከቻሉ ያስተካክሉ፤ በተን ሳይጫኑ ቋንቋ መምረጥ ትክክል ያልሆነ ውጤት ስለሚሰጥ \'ኣድስ\' የሚል በተን ከነከኩ በኋላ ቋንቋ ይምረጡ። ሂደት፦ 1) \'ኣድስ\' 2) ቋንቋ ምረጥ 3) ተጫወት';

        userScore= 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        //if (lang_script && lang_script.getAttribute('src')!=null && lang_script.getAttribute('src').indexOf(oldfilename)!=-1)
        const src_attr= lang_script.getAttribute('src');
        const indexof_en= 'http://127.0.0.1:3000/language/en.js';
        const indexof_tg= 'http://127.0.0.1:3000/language/tg.js';
        const indexof_am= 'http://127.0.0.1:3000/language/am.js';

        if (lang_script && src_attr!=null)
        {
            if(src_attr.indexOf(indexof_en)== -1 || src_attr.indexOf(indexof_tg)!= -1 || src_attr.indexOf(indexof_am)!=-1)
            //if(lang_script)
            {
                console.log('----in Amharic------');
                const new_script = document.createElement('script');
                new_script.id= 'myScript';
                new_script.setAttribute("src", "./language/am.js");
                new_script.type = 'text/javascript';
                lang_script.parentNode.replaceChild(new_script, lang_script);
                lang_script.remove();
                lang_script= new_script;
                //bodyID.appendChild(lang_script);

                en_lang.innerHTML= 'እንግሊዘኛ';
                tg_lang.innerHTML= 'ትግርኛ';
                am_lang.innerHTML= 'ኣማርኛ';
            
                console.log('src: ' + lang_script.src);
                console.log('I am app--callback-am.'); 
                //action_message.innerHTML= 'ጨዋታ በኣማርኛ እየቀጠለ ነው....';
            } 
        }         
    };
    
    