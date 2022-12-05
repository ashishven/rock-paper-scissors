const CHOICES = ['rock', 'paper', 'scissors']

//game();


const buttons = document.querySelectorAll('.selection');
const displayResult = document.querySelector('.results')

buttons.forEach((button)=>{

    button.addEventListener('click', (e)=>{

        let computerSelection = getComputerChoice();
        let playerSelection = e.target.textContent;

        let result = playRound(playerSelection,computerSelection);

        displayResult.textContent=result;

    });
});



function playRound(playerSelection, computerSelection)
{

    let actualPlayerChoice = playerSelection.toLowerCase()




    if(actualPlayerChoice=="rock")
    {
        if(computerSelection=="paper")
        {
            return "You lose! Paper beats Rock"
        }
        
        if(computerSelection=="scissors")
        {
            return "You win! Rock beats Scissors"
        } 

            return "Draw!"
        
    }

    if(actualPlayerChoice=="scissors")
    {
        if(computerSelection=="paper")
        {
            return "You win! Scissors beats Paper"
        }
        
        if(computerSelection=="rock")
        {
            return "You lose! Rock beats Scissors"
        } 

            return "Draw!"
    }


    if(actualPlayerChoice=="paper")
    {
        if(computerSelection=="rock")
        {
            return "You win! Paper beats Rock"
        }
        
        if(computerSelection=="scissors")
        {
            return "You lose! Scissors beats Paper"
        } 

            return "Draw!"
    }

    return "Invalid choice"



    
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

    let playerScore =0
    let computerScore =0 

    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter your choice")

        if(playerSelection==null)
        {
            console.log("Game Ended")
            return
        }

        let computerSelection = getComputerChoice()

        let result = playRound(playerSelection, computerSelection)

        console.log(result)

        if(result.includes('win'))
        {
            playerScore++
        } else if(result.includes('lose')){

            computerScore++

        } else if(result.includes('Draw')) {

            //if draw both get point
            playerScore++
            computerScore++
        } else {    

            //if invalid choice cancel turn
            i--;                                    
            continue;
        }
    }




    if(playerScore>computerScore)
    {
        console.log(`You won! Score: ${playerScore} - ${computerScore} `)
    } else if(playerScore<computerScore){
        console.log(`You lost! Score: ${playerScore} - ${computerScore} `)
    } else {
        console.log(`Draw! Score: ${playerScore} - ${computerScore} `)
    }

   
}

