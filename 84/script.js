const digit1 = document.querySelector(".digit1");
const digit2 = document.querySelector(".digit2");
const digit3 = document.querySelector(".digit3");

gsap.to(".digit1 span", {
  top: (index, target, targets) => {
    // Last span (index 9) gets top: 0, all others get top: -100
    return index === targets.length - 1 ? 0 : -100;
  },
  stagger: 0.1,
  delay: 2,
});

gsap.to(".digit2 span", {
  top: (index, target, targets) => {
    // Last span (index 9) gets top: 0, all others get top: -100
    return index === targets.length - 1 ? 0 : -100;
  },
  stagger: 0.2,
  delay: 0.4,
});

gsap.to(".digit3 span", {
  top: (index, target, targets) => {
    // Last span (index 9) gets top: 0, all others get top: -100
    return index === targets.length - 1 ? 0 : -100;
  },
  stagger: 0.25,
});
