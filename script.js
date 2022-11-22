const CHOICES = ['rock', 'paper', 'scissors']


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


