let clockk=document.querySelector("#timm");
const date=new Date();
let currentData=date.toJSON();
console.log(currentData);

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function crsrmove(){
    window.addEventListener("mousemove",function(dets){
     document.querySelector(".crs").style.transform=`translate(${dets.clientX}px,${dets.clientY}px
        )`
    console.log(dets.clientX)
    })
}
crsrmove();
 var tl=gsap.timeline();
tl.from("#heading h1,#hero",{
    y:-80,
    opacity:0,
    duration:1,
    delay:.5,
   stagger:0.5,

})
tl.from("#second",{
    y:80,
    opacity:0,
    duration:1,
    delay:.2,
    scrollTrigger:{
        trigger:"#second"
    }
})