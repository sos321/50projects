//Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Controls
const btnMinus = document.getElementById("decrease");
const btnPlus = document.getElementById("increase");
const colorPicker = document.getElementById("color");
const reset = document.getElementById("clear");
const sizeEl = document.getElementById("size");

let size = 20;
let isPressed = false;
let color = "black";
let x, y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const xMove = e.offsetX;
    const yMove = e.offsetY;

    drawCircle(xMove, yMove);
    drawLine(x, y, xMove, yMove);

    x = xMove;
    y = yMove;
  }
});

btnMinus.addEventListener("click", () => {
  if (size === 5) return;

  size -= 5;
  sizeEl.textContent = size;
});

btnPlus.addEventListener("click", () => {
  if (size === 50) return;

  size += 5;
  sizeEl.textContent = size;
});

colorPicker.addEventListener("change", (e) => (color = e.target.value));

reset.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

function drawCircle(x, y) {
  ctx.beginPath();

  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;

  ctx.fill();
}

function drawLine(xFrom, yFrom, xTo, yTo) {
  ctx.beginPath();

  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;

  ctx.stroke();
}
