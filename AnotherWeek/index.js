var container=document.getElementById("grid-container");
for(var i=0;i<16;i++){
    for(var j=0;j<16;j++){
        let tempEl=document.createElement("div");
        tempEl.className="gridPiece";
        tempEl.style.left=10+j*(1500/16)+"px";
        tempEl.style.top=50+i*(1500/16)+"px";
        tempEl.style.width=1500/16+"px";
        tempEl.style.height=1500/16+"px";
        container.appendChild(tempEl);
    }
}
const isHovered = e => e.parentElement.querySelector(':hover') === e;
document.addEventListener('mousemove',()=>{
    let gridPieces=document.body.getElementsByClassName("gridPiece");
    for(var i=0;i<gridPieces.length;i++){
        if(isHovered(gridPieces[i])){
            gridPieces[i].style.backgroundColor="blue";
        }
    }
});
function makeGrid(){
    var amount=+prompt("How many pixels?");
    if(amount>100){
        amount=100;
    }
    container.innerHTML="";
    for(var i=0;i<amount;i++){
        for(var j=0;j<amount;j++){
            let tempEl=document.createElement("div");
            tempEl.className="gridPiece";
            tempEl.style.left=10+j*(1500/amount)+"px";
            tempEl.style.top=50+i*(1500/amount)+"px";
            tempEl.style.width=1500/amount+"px";
            tempEl.style.height=1500/amount+"px";
            container.appendChild(tempEl);
        }
    }
}