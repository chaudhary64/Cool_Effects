document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  let cards = gsap.utils.toArray(".cards");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "+=3000",
      scrub: true,
      markers: true,
      pin: true,
    },
  });

  cards.forEach((element, index) => {
    tl.to(element, {
      top: (_, target, targets) => {
        console.log(50 - (index + 1) * 1.5);
        return 50 + (index + 1) * 1.5 + "%";
      },
      transform: "translateY(-50%)",
    });
  });
});
