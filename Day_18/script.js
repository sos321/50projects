const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
setBgToBody();

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

leftBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) activeSlide = 0;

  setActiveSlide();
  setBgToBody();
});

rightBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) activeSlide = slides.length - 1;

  setActiveSlide();
  setBgToBody();
});
