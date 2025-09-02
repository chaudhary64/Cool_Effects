document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  gsap.set([bar1, bar2, bar3], {
    background:
      "linear-gradient(90deg, #414345 0%, #343536ff 40%, #e0eafc 100%)",
  });

  gsap.to([bar1, bar2, bar3], {
    left: "100%",
    stagger: 0.5,
    delay: 0.5,
    repeat: -1,
    duration: 1,
  });
});
