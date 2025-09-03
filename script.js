

var main = document.querySelector('.main')

var cursor = document.querySelector('.cursor')

var divImage = document.querySelector(".image");



main.addEventListener('mousemove', function(val){
    gsap.to( cursor,{
        x:val.x,
        y:val.y,
    })

    
})

divImage.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View"
      gsap.to(cursor,{
        scale:4,
      })
})

divImage.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
    })
});
