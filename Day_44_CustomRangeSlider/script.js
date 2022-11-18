const range = document.getElementById("range");
const label = range.nextElementSibling;

const MAX = range.max;
const MIN = range.min;

const rangeWidth = +getComputedStyle(range)
  .getPropertyValue("width")
  .slice(0, -2);
const labelWidth = +getComputedStyle(label)
  .getPropertyValue("width")
  .slice(0, -2);

range.addEventListener("input", (e) => {
  const value = +e.target.value;

  const left =
    value * (rangeWidth / MAX) - labelWidth / 2 + map(value, MIN, MAX, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = value;
});

function map(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
