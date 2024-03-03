var tl = gsap.timeline()



tl.from("#loader h3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to("#loader h3", {
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})

tl.to("#loader", {
    opacity:0
})


tl.from("#wertech h1 span", {
    y:10,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    delay:-0.3
})

tl.from(".anime", {
    stagger: .2,
    opacity:0,
    y: 10,
    duration: 1,
    ease: Power2,
    delay:-0.5
})

tl.to("#loader", {
    display:"none"
})