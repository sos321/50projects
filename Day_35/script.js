const imageCarousel = document.getElementById("imgs");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

const imageCount = document.querySelectorAll(".image-container img").length;
const CAROUSELWIDTH = 500;

let state = 0;

let interval = setInterval(move, 3000);

rightBtn.addEventListener("click", () => {
  state++;
  updateCarousel();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  state--;
  updateCarousel();
  resetInterval();
});

function move() {
  state++;
  updateCarousel();
}

function updateCarousel() {
  if (state < 0) {
    state = imageCount - 1;
  } else if (state > imageCount - 1) {
    state = 0;
  }

  imageCarousel.style.transform = `translateX(-${state * CAROUSELWIDTH}px)`;
}

function resetInterval() {
  clearInterval(interval);

  interval = setInterval(move, 3000);
}
