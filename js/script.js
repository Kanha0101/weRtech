Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

gsap.from(".anime", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2
})

gsap.from("#subscribe>h1", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})
gsap.from("#subscribe #wertech h1", {
    stagger: .2,
    y: 20,
    duration: 1,
    ease: Power3,
    opacity: 0
})