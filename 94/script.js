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

// create the final state
grid.classList.add("final-grid-state");

// Save the final state
const state = Flip.getState(grid, {
  props: "gap",
});

// Revert to the initial state
grid.classList.remove("final-grid-state");

// Animate to the final state on scroll

const tl = Flip.to(state, {
  ease: "none",
  scrollTrigger: {
    trigger: grid,
    start: "top top",
    end: "+=200%",
    markers: true,
    pin: main,
    scrub: 1,
  },
});
