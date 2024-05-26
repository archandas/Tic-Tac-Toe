let gameBox = document.querySelector(".main");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgBox = document.querySelector(".resBox");
let showMsg = document.querySelector("#result");
let nGame = document.querySelector("#newGame");
let turnO = true;
let clickCount = 0;
let win = false;
let winPattern = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((boxz)=>{
boxz.addEventListener("click",()=>{
    clickCount++;
    boxz.style.backgroundColor="rgb(27, 3, 26)";
if(turnO){
    boxz.innerText="O";
    boxz.style.color="rgb(255,255,255)";
    turnO=false;
}
else{
    boxz.innerText="X";
    boxz.style.color="rgb(255,5,80)";
    turnO = true;
}
boxz.disabled = true;

checkWin();
if(clickCount===9 && win===false){
    console.log("DRAw");
    showMsg.innerText = "GAME IS DRAW";
    msgBox.classList.remove("hide");
    gameBox.classList.add("hide");

}
});
});

const checkWin=()=>{
    for(let pattern of winPattern){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText){
                console.log("winner");
                win=true;
                for(let boxz of boxes){
                    boxz.disabled = true;
        }
        showMsg.innerText = `${boxes[pattern[0]].innerText} WON THE MATCH`;
    msgBox.classList.remove("hide");
    gameBox.classList.add("hide");
    
    }
   
}


}



}
resetBtn.addEventListener("click",()=>{
    clickCount = 0;
    win = false;
    for(let boxz of boxes){
boxz.innerText = "";
boxz.disabled = false;
    }
turnO = true;
console.log("R");
});
nGame.addEventListener("click",()=>{
    clickCount = 0;
    win=false;
    gameBox.classList.remove("hide");
    msgBox.classList.add("hide");
    for(let boxz of boxes){
boxz.innerText = "";
boxz.disabled = false;
    }
turnO = true;
console.log("NG");
});