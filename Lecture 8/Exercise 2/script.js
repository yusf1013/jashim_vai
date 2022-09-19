let arr = ["rock", "paper", "scissors"];

let rockResult = [0, -1, 1];
let paperResult = [1, 0, -1];
let scissorsResult = [-1, 1, 0];

let myWins = 0, computerWins = 0, tie = 0;

// let totalScore = 0;

// function randomChoice() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     return arr[randomIndex];
// }

function randomChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

function onButtonClick(userChoice) {
    let computerChoice = randomChoice();
    let userScore;

    if(userChoice === 0){
        userScore = rockResult[computerChoice];
    }
    else if(userChoice === 1){
        userScore = paperResult[computerChoice];
    }
    else {
        userScore = scissorsResult[computerChoice];
    }

    // totalScore += userScore;

    if(userScore === -1)
        computerWins++;
    else if(userScore === 1)
        myWins++;
    else
        tie++;
    

    let ol = document.getElementsByTagName("ol")[0];
    let newNode = document.createElement("li");
    newNode.innerHTML = `You - ${arr[userChoice]}, Computer - ${arr[computerChoice]} `
    ol.appendChild(newNode);

    let h3 = document.getElementsByTagName("h3")[0];
    h3.innerHTML = `Score: You - ${myWins}, Computer - ${computerWins}, Tie - ${tie}`;

    console.log("You chose", arr[userChoice]);
    console.log("Computer chose", arr[computerChoice]);
    // console.log("Score:", totalScore);

}