var uuserscore = 0;
var computerscore = 0;
var userscore = document.getElementById("userscore");
var compscore = document.getElementById("compscore");
var scoretitle = document.querySelector(".score");
var move = document.querySelector(".moves");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var result = document.querySelector(".result");

function computer()
{
var choice = ['r', 'p', 's'];
var random = Math.floor(Math.random()*3); 
    return choice[random];
}

function converttoword(word)
{
 if (word === "r") return "Rock";
    if (word === "p") return "Paper";
     return "Scissor";
    
}

function wins(user,comp)
{
    uuserscore++;
    userscore.innerHTML = uuserscore;
    result.innerHTML= converttoword(user) + " beats " + converttoword(comp) + ". You Win!";
}

function loses(user, comp)
{
    computerscore++;
    compscore.innerHTML = computerscore;
    result.innerHTML= converttoword(comp) + " beats " + converttoword(user) + ". You Lose!";
}

function draws()
{
    result.innerHTML= "Its a Draw!";
}

function game(userchoice)
{   
    var computerchoice = computer();
    switch( userchoice + computerchoice)
        {
            case "rs":
            case "pr":
            case "sp":
                wins( userchoice , computerchoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                loses( userchoice , computerchoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draws();
                break;
        }
}

function main(){
rock.addEventListener('click',function(){
    game("r");
})

paper.addEventListener('click',function(){
    game("p");
})

scissor.addEventListener('click',function(){
    game("s");
})
}

main();