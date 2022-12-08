const CHOICES = ['rock', 'paper', 'scissors']
        const player = document.querySelector('#rock1');
        const computer = document.querySelector('#rock2');
        const roundResult = document.querySelector('.round-result-container');
        const roundResultText = document.querySelector('.round-result-text');

        const playerScore = document.querySelectorAll('.player-score');
        const computerScore = document.querySelectorAll('.computer-score');
        const playField = document.querySelector('.play-field');

        const scoreboard = document.querySelector('.scoreboard');
        const playerContainer = document.querySelector('.player-container');
        const computerContainer = document.querySelector('.computer-container');
        const playSceneContainer = document.querySelector('.play-scene-container');
        const selectionSceneContainer = document.querySelector('.selection-scene-container');
        const winnerSceneContainer = document.querySelector('.winner-scene-container');
        const startSceneContainer = document.querySelector('.start-scene-container');

        const infoSceneContainer = document.querySelector('.info-scene-container');


        const winnerResultText = document.querySelector(".winner-result-text")

        const startGameButton = document.querySelector("#startGame");
        const playAgainButton = document.querySelector("#playAgain");


        let currentPlayerScore = 0;
        let currentComputerScore = 0;
        let addOne = '';



        //START


        startGameButton.addEventListener('click', (e) => {
            startSceneContainer.style.animationName = 'fadeOut';

            startSceneContainer.addEventListener('animationend', (e) => {

                startSceneContainer.style.display = 'none';
                infoSceneContainer.style.display = 'flex';
                infoSceneContainer.style.animationName = 'fadeIn';
                event.stopPropagation();

                infoSceneContainer.addEventListener('animationend', (e) => {

                    infoSceneContainer.style.animationDelay = "1s";
                    infoSceneContainer.style.animationName = 'fadeOut';

                    event.stopPropagation();

                    infoSceneContainer.addEventListener('animationend', (e) => {

                          infoSceneContainer.style.display = 'none';
                          infoSceneContainer.style.animationDelay = "";
                          selectionSceneContainer.style.display = 'flex';
                          selectionSceneContainer.style.animationName = 'fadeIn';
                          event.stopPropagation();


                    }, { once: true });

                }, { once: true });


            }, { once: true });



        });




        playAgainButton.addEventListener('click', (e) => {


            winnerSceneContainer.style.animationName='fadeOut';

            winnerSceneContainer.addEventListener('animationend', (e) => {

                winnerSceneContainer.style.display = 'none';

                currentComputerScore=0;
                currentPlayerScore=0;
                computerScore.forEach((c) => c.textContent = currentComputerScore);

                playerScore.forEach((c) => c.textContent = currentPlayerScore);



            
                startSceneContainer.style.display = 'flex';
                startSceneContainer.style.animationName = 'fadeIn';
                event.stopPropagation();


            }, { once: true });

        });





        const choices = document.querySelectorAll('.choice-image')


        choices.forEach((choice) => {
            choice.addEventListener('click', (e) => {

                let computerSelection = getComputerSelection();

                let playerSelection = e.target.parentElement.parentElement.lastElementChild.textContent.toLowerCase().trim();

                let result = playRound(playerSelection, computerSelection);


                playAnimation(playerSelection, computerSelection, result);




            });
        })











        function playAnimation(playerSelection, computerSelection, result) {


            selectionSceneContainer.style.animationName = 'fadeOut';

            selectionSceneContainer.addEventListener('animationend', showPlayScene, { once: true });



            player.addEventListener('animationend', (e) => {



                player.querySelector('img').src = playerSelection + ".svg";
                computer.querySelector('img').src = computerSelection + ".svg";

                roundResultText.innerHTML = result[0];
                roundResult.style.animationName = 'fadeIn';

                event.stopPropagation();

                roundResult.addEventListener('animationend', (e) => {




                    if (result[1] == '1' || result == '-1') {
                        addOne = document.querySelector('.player-container').querySelector('.add-one');
                    } else {
                        addOne = document.querySelector('.computer-container').querySelector('.add-one');
                    }


                    if (result[1] == "-1") {
                        playSceneContainer.style.animationName = 'fadeOut';
                        addOne.style.opacity = 1;


                        event.stopPropagation();


                        playSceneContainer.addEventListener('animationend', showSelectionScene, { once: true });


                        return;
                    }

                    addOne.style.animationDelay = '.8s';
                    addOne.style.animationName = 'scaleUp';

                    event.stopPropagation();


                    addOne.addEventListener('animationend', () => updateScore(result[1]), { once: true });






                    addOne.addEventListener('animationend', (e) => {




                        playSceneContainer.style.animationName = 'fadeOut';
                        addOne.style.opacity = 1;


                        event.stopPropagation();



                        if (currentPlayerScore == 5 || currentComputerScore == 5) {

                            playSceneContainer.addEventListener('animationend', () => showWinnerScene(result[1]), { once: true });
                        } else {
                            playSceneContainer.addEventListener('animationend', showSelectionScene, { once: true });
                        }





                    }, { once: true });





                }, { once: true });





            }, { once: true });


        }



        function showWinnerScene(result) {
            playSceneContainer.style.display = 'none';
            roundResult.style.animationName = '';
            roundResult.style.opacity = '0';
            player.querySelector('img').src = "rock.svg";
            computer.querySelector('img').src = "rock.svg";


            if (result == '1') {
                winnerResultText.innerHTML = 'Congratulations, You <span class="outcome-win">won!</span>'
            } else {
                winnerResultText.innerHTML = 'You <span class="outcome-lose">lost!</span> Better luck next time'
            }


            winnerSceneContainer.style.display = 'flex';
            winnerSceneContainer.style.animationName = 'fadeIn';

            event.stopPropagation();
        }



        function showPlayScene() {
            event.stopPropagation();
            selectionSceneContainer.style.display = 'none';
            playSceneContainer.style.display = 'flex';
            playSceneContainer.style.animationName = 'fadeIn';
        }


        function showSelectionScene() {

            playSceneContainer.style.display = 'none';
            roundResult.style.animationName = '';
            roundResult.style.opacity = '0';
            player.querySelector('img').src = "rock.svg";
            computer.querySelector('img').src = "rock.svg";
            selectionSceneContainer.style.display = 'flex';
            selectionSceneContainer.style.animationName = 'fadeIn';

            event.stopPropagation();
        }



        function updateScore(result) {
            {


                if (result == '1') {
                    currentPlayerScore++;
                    playerScore.forEach((p) => p.textContent = currentPlayerScore);

                } else if (result == '0') {
                    currentComputerScore++;
                    computerScore.forEach((c) => c.textContent = currentComputerScore);

                }
                addOne.style.animationName = 'fadeOut';
                event.stopPropagation();

            }
        }





        function playRound(playerSelection, computerSelection) {

            let actualPlayerChoice = playerSelection.toLowerCase()




            if (actualPlayerChoice == "rock") {
                if (computerSelection == "paper") {
                    return ["You <span class='outcome-lose'>lose!</span> Paper beats Rock", "0"];
                }

                if (computerSelection == "scissors") {
                    return ["You <span class='outcome-win'>win!</span> Rock beats Scissors", "1"];
                }

                return ["Draw!", "-1"];

            }

            if (actualPlayerChoice == "scissors") {
                if (computerSelection == "paper") {
                    return ["You <span class='outcome-win'>win!</span> Scissors beats Paper", "1"];
                }

                if (computerSelection == "rock") {
                    return ["You <span class='outcome-lose'>lose!</span> Rock beats Scissors", "0"]
                }

                return ["Draw!", "-1"];
            }


            if (actualPlayerChoice == "paper") {
                if (computerSelection == "rock") {
                    return ["You <span class='outcome-win'>win!</span> Paper beats Rock", "1"];
                }

                if (computerSelection == "scissors") {
                    return ["You <span class='outcome-lose'>lose!</span> Scissors beats Paper", "0"];
                }

                return ["Draw!", "-1"];
            }

            return ["Error", "e"];



        }

        function getComputerSelection() {

            return CHOICES[getRandomInt(3)]

        }



        function getRandomInt(max) {

            return Math.floor(Math.random() * max);
        }









