
let hitrn=0;
let timer=60;
let score=0;
function makeBubble(){
    let clutter="";
for(let i=1;i<=160;i++){
    let rm=Math.floor(Math.random()*10)
    clutter+=`<div class="elem">${rm}</div> `
}
let a=document.querySelector(".pbtm")
a.innerHTML=clutter;
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn
}
function runTimer(){
    setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#Timerval").textContent=timer;
        }
        else{
            clearInterval("Timer")
            document.querySelector(".pbtm").innerHTML=`<h1>Game over: ${score}</h1>`
        }
        
    }, 1000);
}
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector(".pbtm").addEventListener("click",function(dets){
  let clickNum=Number(dets.target.textContent)
  console.log(clickNum)
  if(clickNum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})
makeBubble();
getNewHit();
runTimer();
