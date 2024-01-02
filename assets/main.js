gsap.registerPlugin(ScrollTrigger)

let mytl = gsap.timeline()
.to('.banner__content', {opacity: 0})
ScrollTrigger.create({
    trigger: ".vr-wrapper",
    animation: mytl,
    start: "top 5%",
    end: "top 5%",
    scrub: 1,
    markers: false,
});

let mytl2 = gsap.timeline()
 .to(".vrimg-wrapper img", {scale:2, duration: 2})
 .to(".vrimg-wrapper img", {opacity:0, duration: 1})

ScrollTrigger.create({
    trigger: ".vr-wrapper",
    animation: mytl2,
    scrub: 2,
    markers: false,
    start: 'top top',
    end: '100% bottom',
    pin: true
});