const btn = document.querySelector("#submit_btn");
const form = document.querySelector("form");
const spinner = document.querySelector("#spinner");

let timer;
let tl;

const submitForm = () => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Reversing Timeline");
    tl.reverse();
  }, 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  tl = gsap.timeline({
    onComplete: submitForm,
  });

  tl.to(btn, {
    color: "transparent",
    duration: 0.2,
  });
  tl.to(btn, {
    width: "48px",
    paddingLeft: "0px",
    paddingRight: "0px",
    duration: 0.4,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(spinner, { display: "flex" });
    },
  }).to(spinner, {
    opacity: 1,
  });
});
