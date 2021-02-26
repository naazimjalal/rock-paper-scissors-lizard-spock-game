let user_score = 0;
let Computer_score = 0;
const end = 10;
const Computer_score_span = document.getElementById("Computer_score")
const user_score_span = document.getElementById("User_score")
const scoreBoard_div = document.querySelector(".scoreBoard")
let Result_div = document.querySelector(".result")
const rock_div = document.getElementById("R")
const paper_div = document.getElementById("P")
const scissors_div = document.getElementById("S")
const lizard_div = document.getElementById("L")
const spock_div = document.getElementById("SP")

    

function computer(){
    const choice = ['R', 'P', 'S', 'L', 'SP'];
    const random_number = Math.floor(Math.random() * 5);
    return choice[random_number];
}
function win(User_input){
    user_score++;
    user_score_span.innerHTML = user_score;
    document.getElementById(User_input).classList.add('greenGlow');
    setTimeout(function(){ document.getElementById(User_input).classList.remove('greenGlow')}, 1500);
}
function lose(User_input){
    Computer_score++;
    Computer_score_span.innerHTML = Computer_score;
    document.getElementById(User_input).classList.add('redGlow');
    setTimeout(function(){ document.getElementById(User_input).classList.remove('redGlow')}, 1500);
}
function draw(User_input){
    document.getElementById(User_input).classList.add('greyGlow');
    setTimeout(function(){document.getElementById(User_input).classList.remove('greyGlow')}, 1500);
}
function game(User_input){
    const computerP = computer();
    console.log(User_input + computerP);
    switch(User_input + computerP){
        case "RS":
            Result_div.innerHTML = "Rock crushes Scissors";
            win("R");
            break;
        case "SP":
            Result_div.innerHTML = "Scissors cuts Paper";
            win("S");
            break;
        case "PR":
            Result_div.innerHTML = "Paper covers Rock";
            win("P");
            break;
        case "LP":
            Result_div.innerHTML = "Lizard eats Paper";
            win("L");
            break;
        case "SPR":
            Result_div.innerHTML = "Spock Vaporizes Rock";
            win("SP");
            break;
        case "RL":
            Result_div.innerHTML = "Rock crushes lizard";
            win("R");
            break;
        case "SL":
            Result_div.innerHTML = "Scissors Decapitates lizard";
            win("S");
            break;
        case "PSP":
            Result_div.innerHTML = "Paper Disapproves Spock";
            win("P");
            break;
        case "LSP":
            Result_div.innerHTML = "Lizard poisons Spock";
            win("L");
            break;
        case "SPS":
            Result_div.innerHTML = "Spock Smashes Scissors";
            win("SP");
            break;
            break;
        case "SR":
            Result_div.innerHTML ="Rock crushes Scissors" ;
            lose("S");
            break;
        case "PS":
            Result_div.innerHTML = "Scissors cuts Paper";
            lose("P");
            break;
        case "PL":
            Result_div.innerHTML ="Lizard eats Paper";
            lose("P");
            break;
        case "RP":
            Result_div.innerHTML ="Paper covers Rock";
            lose("R");
            break;
        case "RSP":
            Result_div.innerHTML ="Spock Vaporizes Rock";
            lose("R");
            break;
        case "LR":
            Result_div.innerHTML ="Rock crushes lizard";
            lose("L");
            break;
        case "LS":
            Result_div.innerHTML ="Scissors Decapitates lizard";
            lose("L");
            break;
        case "SPP":
            Result_div.innerHTML ="Paper Disapproves Spock";
            lose("SP");
            break;
        case "SPL":
            Result_div.innerHTML ="Lizard poisons Spock";
            lose("SP");
            break;
        case "SSP":
            Result_div.innerHTML ="Spock Smashes Scissors";
            lose("S");
            console.log("computer wins");
            break;
        case "RR":
            draw("R");
            Result_div.innerHTML ="Its a Draw";
            break;
        case "SS":
            draw("S");
            Result_div.innerHTML ="Its a Draw";
            break;
        case "PP":
            draw("P");
            Result_div.innerHTML ="Its a Draw";
            break;
        case "LL":
            draw("L");
            Result_div.innerHTML ="Its a Draw";
            break;
        case "SPSP":
            draw("SP");
            Result_div.innerHTML ="Its a Draw";
            console.log("Its a draw");
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("R")
        console.log("Rock")
    })

    paper_div.addEventListener('click', function(){
        game("P")
        console.log("Paper")
    })
    scissors_div.addEventListener('click', function(){
        game("S")
        console.log("Scisors")
    })
    lizard_div.addEventListener('click', function(){
        game("L")
        console.log("Lizzard")
    })
    spock_div.addEventListener('click', function(){
        game("SP")
        console.log("SPOCK")
    })
    if (user_score==10){
        user_score = 0;
        Result_div.innerHTML = "You win";
        
    }
    

    }


main();
computer();
