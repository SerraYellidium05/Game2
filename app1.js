let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);//used this to generate random number and converting string is hard so used array in which string can be accessed from array and *3 is used to generate number from 0 to 2
    return options[randomidx];
};

const drawgame=()=>{
    msg.innerText="Game Draw!";
};


const showWinner = (userwin)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText="You Win!";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        msg.innerText="You Lose!";
    }
};


const playGame =(userchoice) =>{// compares if user won or computer
    console.log("user choice =",userchoice);
    const compchoice=genComputerChoice();
    console.log("compchoice =",compchoice);
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;//tracks if user is winnig or not
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
    
};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        console.log("Choice is clicked",userchoice);
        playGame(userchoice);
    });
});
