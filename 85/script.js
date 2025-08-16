document.addEventListener("DOMContentLoaded", (event) => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  // Ball rises with initial velocity, slowing down due to gravity
  tl.to("#ball", {
    y: -200,
    delay: 0.5,
    duration: 0.8,
    ease: "power2.out"
  })
  // Ball falls with increasing speed due to gravity
  .to("#ball", {
    y: 0,
    duration: 0.6,
    ease: "power2.in"
  })
  // Ball squashes on impact (slightly overlapping with fall)
  .to("#ball", {
    scaleX: 1.3,
    scaleY: 0.7,
    duration: 0.25,
    transformOrigin: "center bottom",
    ease: "back.out"
  }, "-=0.1")
  // Ball stretches as it prepares to bounce
  .to("#ball", {
    scaleX: 0.8,
    scaleY: 1.2,
    duration: 0.15,
    ease: "power2.out"
  })
  // Ball returns to normal shape
  .to("#ball", {
    scaleX: 1,
    scaleY: 1,
    duration: 0.2,
    ease: "elastic.out(1, 0.3)"
  });
});
