document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll(".sticky-sections");

  gsap.registerPlugin(ScrollTrigger);

  sections.forEach((section) => {
    // Set initial state
    gsap.set(section, {
      filter: "blur(0px) brightness(100%)",
    });

    gsap.to(section, {
      scale: 0.95,
      filter: "blur(5px) brightness(50%)",
      scrollTrigger: {
        trigger: section,
        start: "bottom bottom",
        end: "+=100%",
        scrub: 1,
      },
    });
  });
});
