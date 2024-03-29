const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    return;
  }

  if (new Date().getTime() - clickTime < 800) {
    createHeart(e);
  }

  clickTime = 0;
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const offsetX = e.target.offsetLeft;
  const offsetY = e.target.offsetTop;

  const xInside = x - offsetX;
  const yInside = y - offsetY;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 601);

  times.innerHTML = ++timesClicked;
}
