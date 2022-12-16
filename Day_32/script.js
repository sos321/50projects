const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => toggle.addEventListener("change", doTheTrick));

function doTheTrick(e) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === e.target) fast.checked = false;
    if (cheap === e.target) good.checked = false;
    if (fast === e.target) cheap.checked = false;
  }
}
