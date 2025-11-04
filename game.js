let choices=document.querySelectorAll(".user-choices");
let choce=document.querySelectorAll(".user-choce");
let userscore=0;
let comscore =0;
let score=document.querySelectorAll(".score");
let scorediv=document.querySelectorAll(".user-score")
let score1=document.querySelector(".score1");
let score2=document.querySelector("#score2")
let msg=document.querySelector("#msg2")

choce.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            let x=choice.getAttribute("id");
            console.log("user choice : ",x);
            computer(x);
    });
});

let y = ['rock', 'paper', 'scissor']; // fixed typo

function computer(x) {
    let value = Math.floor(Math.random() * 3);
    let com = y[value];
    console.log("Computer choice : ", com);

    if (x === com) {
        console.log("Draw match");
        msg.innerText="The match was draw !";
        msg.style.backgroundColor="blue";
    } else if (
        (x === "rock" && com === "paper") ||
        (x === "paper" && com === "scissor") ||
        (x === "scissor" && com === "rock")
    ) {
        console.log("Computer wins");
        msg.innerText="computer win !";
        msg.style.backgroundColor="red";
        comscore++;
        score2.innerText=comscore;
    } else {
        console.log("User wins");
        msg.innerText="user win !";
        msg.style.backgroundColor="green";
        userscore++;
        score1.innerText=userscore;
    }
}