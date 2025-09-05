document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

  gsap.to("#main-heading", {
    scrambleText: {
      text: "Horizontal Scroll Section",
      chars:
        "01!@#$%^&*()+{}|:<>?-=[];~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      speed: 0.5,
    },
    repeat: -1,
    repeatDelay: 1,
  });

  let horizontalScroll = gsap.to("#main", {
    x:
      -(document.querySelector("#main").scrollWidth - window.innerWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
    },
  });

  let balls = document.querySelectorAll(".ball");

  balls.forEach((ball, index) => {
    gsap.to(ball, {
      rotate: 360,
      scrollTrigger: {
        trigger: ball,
        start: "-200% center",
        end: "30% center",
        scrub: true,
        containerAnimation: horizontalScroll,
      },
    });
  });
});
