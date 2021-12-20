const moves = ["rock", "paper", "scissors"];
const playerContainer = document.querySelector(`.player`);
const compContainer = document.querySelector(`.comp`);
const resultContainer = document.querySelector(`.result`);
const pScoreContainer = document.querySelector(`#playerScore`);
const cScoreContainer = document.querySelector(`#compScore`);    
playerScore = 0;
compScore = 0;


//returns Rock, Paper, or Scissor randomly 
function computerPlay() {
    return moves.at(Math.floor(Math.random() * 3));
}

//displays the choice of player and computer
function displayChoice (playerChoice, compChoice) {
    //selects image class under player and comp
    const pChoiceImage = playerContainer.children[1];
    const cChoiceImage = compContainer.children[1];

    //copy the image.src of the player's and computer's choice
    const newPlayerSrc = document.querySelector(`#${playerChoice}`).firstChild.src;
    const newCompSrc = document.querySelector(`#${compChoice}`).firstChild.src;

    //replace the image src with the selected copy
    pChoiceImage.innerHTML = `<img id ="image" src="${newPlayerSrc}">`;
    cChoiceImage.innerHTML = `<img id ="image" src="${newCompSrc}">`;
}

//reset choices of player and computer
function resetChoice() {
    //playerContainer.removeChild(playerContainer.lastChild);
    //compContainer.removeChild(compContainer.lastChild);
}

//displays the result (in text) on who won
function resultScreen(result, playerChoice, compChoice) {
    if(result ==`win`) {resultContainer.textContent = `You ${result.toUpperCase()}! ${playerChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;}
    else if(result ==`lose`) {resultContainer.textContent = `You  ${result.toUpperCase()}! ${compChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;}
    else if(result == 'draw') {resultContainer.textContent = `It's a Draw!`;}
}

//displays current score
function currentScore(){
    pScoreContainer.textContent = `Player Score: ${playerScore}`;
    cScoreContainer.textContent = `Computer Score ${compScore}`;

}

/*plays a round of Rock Paper and Scissors:
 1)First, it reads the player's choice and displays the choice of both computer and player
 2)Determines who wins the round and updates the score
 3)Resets the choices
 4)Determines who wins 5 rounds first and restarts game 
 */

function playRound(e, computerSelection = computerPlay()) {

    //e.target => img src; .parentElement => button="rock" => .id = "rock/paper/scissors"
    const playerChoice = e.target.parentElement.id;
    displayChoice(playerChoice, computerSelection);

    if(playerChoice == computerSelection){
        resultScreen(`draw`);
    }
    /*Player Chose Rock */
    else if(playerChoice == "rock"){
        if(computerSelection == "scissors"){
            ++playerScore;
            //return 'You Win! Rock beats Scissors!';
            resultScreen(`win`, playerChoice, computerSelection);
        }
        else if(computerSelection == "paper"){
            ++compScore;
            //return 'You Lose! Paper beats Rock!';
            resultScreen(`lose`, playerChoice, computerSelection);
        }
    }
    /*Player Chose Paper */
    else if(playerChoice == "paper"){
        if(computerSelection == "rock"){
            ++playerScore;
            //return 'You Win! Paper beats Rock!';
            resultScreen(`win`, playerChoice, computerSelection);
        }
        else if(computerSelection == "scissors"){
            ++compScore;
            //return 'You Lose! Scissors beats Paper!';
            resultScreen(`lose`, playerChoice, computerSelection);
        }
    }
    /*Player Chose Scissors*/
    else if(playerChoice == "scissors"){
        if(computerSelection == "paper"){
            ++playerScore;
            //return 'You Win! Scissors beats Paper!';
            resultScreen(`win`, playerChoice, computerSelection);
        }
        else if(computerSelection == "rock"){
            ++compScore;
            //return 'You Lose! Rock beats Scissors!';
            resultScreen(`lose`, playerChoice, computerSelection);
        }
    }
    currentScore();
    resetChoice();
    if(playerScore >= 5 || compScore >= 5){gg();}
}

/* Win condition */
let gg = () => {
    if(playerScore > compScore){
        alert(`You beat the Computer! Choose rock, paper, or scissors to play again!`)
    }
    else alert(`The Computer beat you! Choose rock, paper, or scissors to play again!`);
    playerScore = 0;
    compScore = 0;
}

document.getElementById(`rock`).addEventListener('click', playRound);
document.getElementById(`paper`).addEventListener('click', playRound);
document.getElementById(`scissors`).addEventListener('click', playRound);




