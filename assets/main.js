gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();
mm.add("(max-width: 767px)", () => {
 
    let mytl2 = gsap.timeline()

    .to(".vrimg-wrapper img", {
       keyframes: {
       "0%": { scale: 1, opacity: 1 },
       "20%": { scale: 1.8, opacity: 1 },
       "50%": { scale: 2.2, opacity: 1 },
       "90%": { scale: 2.4, opacity: 0 }
       },
       transformOrigin: "center center"
   })
   ScrollTrigger.create({
       trigger: ".vr-wrapper",
       animation: mytl2,
       start: "50% 50%",
       end: "100% 50%",
       scrub: 1,
       markers: false,
       pin: true,
       transformOrigin: "center center",
   });
});


mm.add("(min-width: 768px)", () => {
    // let mytl = gsap.timeline()
    // .to('.banner__content', {opacity: 0})
    // ScrollTrigger.create({
    //     trigger: ".vr-wrapper",
    //     animation: mytl,
    //     start: "top 5%",
    //     end: "top 5%",
    //     scrub: 1,
    //     markers: false,
    // });

    let mytl2 = gsap.timeline()

    .to(".vrimg-wrapper img", {
        keyframes: {
        "0%": { scale: 1, opacity: 1 },
        "20%": { scale: 1.5, opacity: 1 },
        "40%": { scale: 2, opacity: 1 },
        "60%": { scale: 2.5, opacity: 1 },
        "80%": { scale: 2.8, opacity: 0 },
        "100%": { scale: 3, opacity: 0}
        },
        transformOrigin: "center center",
        ease: "power1.out"
    })
    ScrollTrigger.create({
        trigger: ".vr-wrapper",
        animation: mytl2,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 0.5,
        markers: false,
        pin: true,
        transformOrigin: "center center",
    });

});