const CHOICES = ['rock', 'paper', 'scissors']

const startButton = document.querySelector("#start")
const gameSection = document.querySelector('.game');




startButton.addEventListener("click",()=>{


    gameSection.classList.toggle('hide');
    startButton.classList.toggle('hide');

});






const buttons = document.querySelectorAll('.selection');
const displayResult = document.querySelector('.results')
const scoreResult = document.querySelector('.score');
const winnerResult = document.querySelector('.winner')
let playerScore=0;
let computerScore=0;

buttons.forEach((button)=>{

    button.addEventListener('click', (e)=>{

        let computerSelection = getComputerChoice();
        let playerSelection = e.target.textContent;

        let result = playRound(playerSelection,computerSelection);



        if(result[1]=="1")
        {
            playerScore++;

            if(playerScore==5)
            {
                displayWinner("You won!")
            }

        }
        
        if(result[1]=="0")
        {

            computerScore++;


            if(computerScore==5)
            {
                displayWinner("You lose!")
            }
        } 


        displayResult.textContent=result[0];
        scoreResult.textContent=`Player: ${playerScore}  Computer: ${computerScore}`;

        

    });
});










function playRound(playerSelection, computerSelection)
{

    let actualPlayerChoice = playerSelection.toLowerCase()




    if(actualPlayerChoice=="rock")
    {
        if(computerSelection=="paper")
        {
            return ["You lose! Paper beats Rock","0"];
        }
        
        if(computerSelection=="scissors")
        {
            return ["You win! Rock beats Scissors","1"];
        } 

            return ["Draw!","-1"];
        
    }

    if(actualPlayerChoice=="scissors")
    {
        if(computerSelection=="paper")
        {
            return ["You win! Scissors beats Paper","1"];
        }
        
        if(computerSelection=="rock")
        {
            return ["You lose! Rock beats Scissors","0"]
        } 

            return ["Draw!","-1"];
    }


    if(actualPlayerChoice=="paper")
    {
        if(computerSelection=="rock")
        {
            return ["You win! Paper beats Rock","1"];
        }
        
        if(computerSelection=="scissors")
        {
            return ["You lose! Scissors beats Paper","0"];
        } 

            return ["Draw!","-1"];
    }

    return ["Error","e"];


    
}

function getComputerChoice()
{

    return CHOICES[getRandomInt(3)]

}



function getRandomInt(max) {
    
    return Math.floor(Math.random() * max);
}


function game()
{


   
}


function displayWinner(winner)
{

    gameSection.classList.add('hide');

    winnerResult.textContent=winner;
}

