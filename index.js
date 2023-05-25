let play = document.getElementById("play");
let hvh = document.getElementById("hvh");
let hva = document.getElementById("hva");

play.addEventListener("click",(e)=>{
  if(hvh.checked){
    window.location = "./human.html"
  }else{
    window.location = "./ai.html"
  }
  
})



