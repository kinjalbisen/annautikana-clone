var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    // console.log("hey");
})

//page-one

var one = document.querySelectorAll("#page1 .one");

one.forEach(function(o){
    var img = o.childNodes[1]

    o.addEventListener("mouseenter", function(){
        gsap.to(img, {
            transform: 'translateY(-50%) scale(1)',
            opacity: 1
        })
    })
    o.addEventListener("mouseleave", function(){
        gsap.to(img, {
            transform: 'translateY(-50%) scale(0)',
            opacity: 0
        })
    })
    o.addEventListener("mousemove", function(dets){
        gsap.to(img, {
            top:dets.y
        })
    })
})

// var box = document.querySelectorAll("#boxes .box");
// var boxImg = document.querySelectorAll(".box img");

// box.addEventListener("mouseenter", function(){
//      boxImg.style.opacity = "1";
// })
// box.addEventListener("mouseleave", function(){
//     boxImg.style.opacity = "0";
// })

var elem = document.querySelectorAll(" #page6-2 .elem",);

elem.forEach(function(e){
    var img = e.childNodes[1]

    e.addEventListener("mouseenter", function(){
        gsap.to(img, {
            transform: 'translateX(-150%) scale(1)',
            opacity: 1
        })
    })
    e.addEventListener("mouseleave", function(){
        gsap.to(img, {
            transform: 'translateX(-150%) scale(0)',
            opacity: 0
        })
    })
    e.addEventListener("mousemove", function(dets){
        gsap.to(img, {
            left:dets.x
        })
    })
})


var elem = document.querySelectorAll(" #page10 .elem",);

elem.forEach(function(e){
    var img = e.childNodes[1]

    e.addEventListener("mouseenter", function(){
        gsap.to(img, {
            transform: 'translateX(-150%) scale(1)',
            opacity: 1
        })
    })
    e.addEventListener("mouseleave", function(){
        gsap.to(img, {
            transform: 'translateX(-150%) scale(0)',
            opacity: 0
        })
    })
    e.addEventListener("mousemove", function(dets){
        gsap.to(img, {
            left:dets.x
        })
    })
})
gsap.from("#page3 h1, #page3 span",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,

    scrollTrigger:{
        trigger:"#page3 h1, #page3 span",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})

gsap.from("#page6-1 h1, #page6-1 span",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:1,

    scrollTrigger:{
        trigger:"#page6-1 h1, #page6-1 span",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:2,
    }
})
gsap.from("#page11 img",{
    transform:"rotateY(180deg)",
    duration:1,

    scrollTrigger:{
        trigger:"#page11 img",
        scroller:"body",
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.to("#layer-1",{
    transform:"translateY(-100%)",
    duration:3,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true,
    }
})

gsap.to("#layer-2",{
    transform:"translateY(-100%)",
    duration:3,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true,
    }
})
gsap.from("#page8 h1, #page8 span",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:1,

    scrollTrigger:{
        trigger:"#page8 h1, #page8 span",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:2,
    }
})
