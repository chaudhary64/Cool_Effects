const home = document.getElementById("home");

const elems = document.querySelectorAll("a");

elems.forEach((elem) => {
  const textElem = elem.querySelector("p");

  elem.addEventListener("mousemove", (e) => {
    const height = elem.getBoundingClientRect().height;
    const width = elem.getBoundingClientRect().width;

    const x = e.offsetX;
    const y = e.offsetY;
    const power = 10;

    const posX = ((x - width / 2) / (width / 2)) * power;
    const posY = ((y - height / 2) / (height / 2)) * power;

    console.clear();
    console.log(posX, posY);

    gsap.to(textElem, {
      x: posX,
      y: posY,
    });
  });

  elem.addEventListener("mouseleave", (e) => {
    gsap.to(textElem, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.2)",
      duration: 1.5,
    });
  });
});
