let play = document.getElementById("play");
let hvh = document.getElementById("hvh");
let hva = document.getElementById("hva");

play.addEventListener("click",(e)=>{
  if(hvh.checked){
    mode="human";
  }else{
    mode = "ai";
  }

  window.location = `./main.html?mode=${mode}`;
  
})



