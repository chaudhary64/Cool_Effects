document.addEventListener("DOMContentLoaded", (event) => {
  const ball = document.querySelector("#ball");

  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  tl.to(ball, {
    y: -200,
    duration: 0.8,
    id: "upwards",
  })
    .to(ball, { y: 0, ease: "power1.in", id: "downwards" }, ">")
    .to(ball, {
      scaleY: 0.8,
      scaleX: 1.3,
      duration: 0.2,
      transformOrigin: "50% 100%",
      repeat: 1,
      yoyo: true,
      id: "squash",
    });

  // Create GSDevTools after the timeline is configured
  GSDevTools.create({
    animation: tl,
  });
});
