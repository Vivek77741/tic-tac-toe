let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newgamebtn=document.querySelector("#newbtn");
let msgcon=document.querySelector(".msg");
let msg=document.querySelector("#win");
let turnO= true;// playerX=false playerY=true
//winning patterns 
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(turnO){
            i.innerHTML="O";
            turnO=false;
        }
        else{
            i.innerHTML="X";
            turnO=true;
        }
        i.disabled =true;

        checkWinner();
    })
})


const resetgame = () =>{
    for(let i of boxes){
        i.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerHTML=`Congratulations ,Winner is ${winner}`;
    msgcon.classList.remove("hide");
}
const checkWinner=()=>{
    for(let i of winPatterns){
        let pos1v=boxes[i[0]].innerText;
        let pos2v=boxes[i[1]].innerText;
        let pos3v=boxes[i[2]].innerText;
        if(pos1v !="" && pos2v!="" && pos3v !=""){
            if(pos1v===pos2v && pos2v===pos3v){
                console.log("winner",pos2v);
                showWinner(pos2v);
            }
        }
        
    }
}

reset.addEventListener("click",resetgame);