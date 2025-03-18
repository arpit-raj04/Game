let boxes =document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let new_game = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX,playerO  

const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetgame =()=>{
    enableboxes();
    turn0 = true;
    msgcontainer.classList.add("hide");
    for(box of boxes){
        box.innerText = "";
    }
}

const disableboxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableboxes =()=>{
    for(box of boxes){
        box.disabled = false;
    }
}


const displaywinner = (p1)=>{
    msg.innerText = `Congratulations! ${p1} Won the Game.`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}
const checkWinner = ()=>{
    for(let pattern of wins){
        // console.log(pattern);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""  ){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner",pos1val);
                displaywinner(pos1val);
            };
        }
    }

};

reset_btn.addEventListener("click",resetgame);
new_game.addEventListener("click",resetgame);