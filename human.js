let chance = "player 1"
let mssg = document.getElementById("headDiv").lastElementChild

console.log(mssg);


let board = document.getElementById("board")
let boardBox = board.children;

for(let i = 0; i < boardBox.length; i++){
    let box = boardBox[i];

    box.addEventListener("click",(e)=>{

        if(box.classList.contains("cross") || box.classList.contains("circle")){
            return;
        }

        if(chance == "player 1"){
            box.classList.add("cross");
            chance = "player 2";
            mssg.classList.remove("pl1")
            mssg.classList.add("pl2")
            mssg.innerHTML = "Player 2 chance";
        }else{
            box.classList.add("circle");
            chance = "player 1";
            mssg.classList.remove("pl2")
            mssg.classList.add("pl1")
            mssg.innerHTML = "Player 1 chance";
        }
    })
    
}





