let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score")

const showWinner =(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++
        userScorePara.innerText=userScore
        msg.innerText = `You Win 🎊!.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText=compScore
        msg.innerText=`You Loose 😢!.. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const drawGame =()=>{
    msg.innerText="Game was draw  .. Play again";
    msg.style.backgroundColor="#081b31"
}

const genCompChoice =()=>{
    const options =["rock","paper","scissor"]
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx]
}

const playGame =(userChoice)=>{
    // console.log("User Choice" , userChoice)
    //select computer choice :
    const compChoice =genCompChoice();


    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissor, paper
           userWin= compChoice === 'paper'? false:true
        }else if (userChoice === 'paper'){
            //rock,scissor
            userWin = compChoice === 'scissor' ? false : true ;
        }else {
            // rock, paper
             userWin = compChoice==='rock' ? true : false;
        }
        showWinner(userWin, userChoice,compChoice)
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", function(){
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", choice);
        playGame(userChoice);
})
});

// let userChoice = 0
// let compChoice= 0

// let choices = document.querySelectorAll(".choice");
// let msg = document.querySelector("#msg");



// const showWinner =(userWin)=>{
//     if (userWin){
//         msg.innerText = "You win"
//     }
//     else{
//         msg.innerText="you loose"
//     }
// }

// //computer choice btw stone ,paper,scissor
// const genCompChoice = ()=>{
//     let options = ["rock","paper","scissor"];
//     let idx = Math.floor(Math.random()*3)
//     return options[idx]
// }
// const gameDraw =()=>{
//     console.log("game was draw")
//     msg.innerText="game Draw"
// }

// const gamePlay =(userChoice)=>{
//     const compChoice = genCompChoice();
//     console.log("computer choice", compChoice)

//     if (userChoice===compChoice){
//         gameDraw();
//     }
//     else{
//         let userWin=true;
//         if (userChoice==='rock'){
//             //paper,scissor
//            userWin = compChoice ==='paper'?false:true
//         }else if (userChoice === 'paper'){
//             //rock, scissor
//              userWin = compChoice==="rock"? false : true  
//         }else {
//             // rock, paper
//             userWin = compChoice==="rock" ? true : false
            
//         }
//         showWinner(userWin);
//     }
// }

// choices.forEach((choice)=>{
//     choice.addEventListener('click',()=>{
//         const userChoice = choice.getAttribute("id");
//         console.log("user choice" , userChoice)
//         gamePlay(userChoice)
//     })
// })