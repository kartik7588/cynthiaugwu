const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav", {
        y:'-10',
        opacity:0,
        duration:1.5 ,
        ease:Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2 
    })

    .from("#herofooter",{
        y:-10,
        opacity:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
    })
}

firstPageAnim();



function circleMouseFollower() {
    let minicircle = document.querySelector("#minicircle");
    window.addEventListener("mousemove", function (e) {
        gsap.to(minicircle, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3, // Adjust for smoothness
            ease: "power2.out",
        });
    });
}

circleMouseFollower();



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate =0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
        }) 
    })


    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY-elem.getBoundingClientRect().top 
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top:diff,
            left:details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot )
        }) 
    })
})