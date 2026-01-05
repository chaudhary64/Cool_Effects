function lenis() {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
}

lenis();

const grid = document.querySelector("main section");
const main = document.querySelector("main");
const gridItems = gsap.utils.toArray("main section img");

gsap.registerPlugin(ScrollTrigger, Flip);

gridItems.forEach((item) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  tl.fromTo(item, { scale: 0.5, ease: "none" }, { scale: 1, ease: "none" }).to(
    item,
    { scale: 0.5, ease: "none" }
  );
});
