function getComputerChoice(){
    var choices=["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)];
}
function getWinner(p1,p2){
    p1=p1.toLowerCase();
    p2=p2.toLowerCase();
    var winTable={
        "rock":["paper","scissors"],
        "paper":["scissors","rock"],
        "scissors":["rock","paper"]
    };
    if(p1===p2){
        return "Tie";
    }
    else if(winTable[p1].indexOf(p2)===0){
        return "The computer won";
    }
    else if(winTable[p1].indexOf(p2)===1){
        return "The player won"
    }
    return "Invalid input";
}
function game(){
    for(var i=0;i<5;i++){
        var cpu=getComputerChoice();
        alert("CPU chose "+cpu+", "+getWinner(prompt("Rock, Paper or Scissors (Watch your Spelling!)"),cpu));
    }
}
game();