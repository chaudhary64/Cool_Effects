const main = document.querySelector("main");
const clip1 = document.getElementById("clip1");
const clip2 = document.getElementById("clip2");

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: main,
    start: "top top",
    end: "+=500%",
    markers: true,
    pin: true,
    scrub: 1,
  },
  ease: "none",
});

tl.to(
  clip1,
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  },
  0
).to(
  clip2,
  {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  },
  0
);
