const mask = document.getElementById("mask");
const width = mask.getBoundingClientRect().width;
const tl = gsap.timeline();

tl.to(mask, {
  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  duration: 2,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
