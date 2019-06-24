const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const model = document.querySelector('.model');
const scoreboard = {
    player: 0,
    computer: 0
}

//play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }
    else if(rand <= 0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//get winner
function getWinner(p, c){
    if(p === c){
        return 'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }else{
            return 'player';
        }
    }
    else if(p === 'paper'){
        if(c === 'scissors'){
            return 'player';
        }else{
            return 'computer';
        }
    }
    else if(p === 'scissors'){
        if(c === 'rock'){
            return 'computer';
        }else{
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        //Inc player score
        scoreboard.player++;
        //show model result
        result.innerHTML= `
            <h4 class="text-win">You Win</h4>
            <img class="img-fluid" src="images/${computerChoice}.png" alt="">
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else if(winner === 'computer'){
        //Inc computer score
        scoreboard.computer++;
        //show model result
        result.innerHTML= `
            <h4 class="text-lose">You Lose</h4>
            <img class="img-fluid" src="images/${computerChoice}.png" alt="">
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }else{
        //show model result
        result.innerHTML= `
            <h4>It's a Draw</h4>
            <img class="img-fluid" src="images/${computerChoice}.png" alt="">
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }

    //show score
    score.innerHTML=`
        <div class="col-6">Player: ${scoreboard.player}</div>
        <div class="col-6">computer: ${scoreboard.computer}</div>
    `;

    model.style.display='block';

}

//Event listener
choices.forEach(choice => choice.addEventListener('click',play));