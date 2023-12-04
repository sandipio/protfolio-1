var tl=gsap.timeline();
tl.from("#navvv",{
    y:-80,
    opacity:0,
    duration:1,
    delay:.5,
   stagger:0.5,

})
tl.from("#panelss",{
    y:-80,
    opacity:0,
    duration:.7,



})


// let clicckk=document.querySelector("#clickk")
// console.log(clicckk)

function total(click){
    const Count=document.getElementById("count");
    const sumValue=parseInt(Count.innerText)+click;
   Count.innerText=sumValue;
}
