const main = document.querySelector("main section");

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: main,
    start: "top top",
    end: "+=200%",
    // markers: true,
    pin: true,
    scrub: 1,
  },
});

tl.to(main, {
  scale: 3,
  ease: "none",
});
