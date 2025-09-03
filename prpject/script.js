

var menu = document.querySelector("#nav i");

var cross = document.querySelector("#full i");





var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:1,
})

tl.from("#full h4",{
    x:200,
    duration:1,
    stagger:0.5,
    opacity:0,
    // repeat: -1,

})

tl.pause()


menu.addEventListener("click", function (){
    tl.play();
})


cross.addEventListener("click", function (){
    tl.reverse();
});