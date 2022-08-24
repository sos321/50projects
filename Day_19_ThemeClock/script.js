const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const time = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

//prettier-ignore
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//prettier-ignore
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");

    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");

    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const date = new Date();

  hour.style.transform = `translate(-50%, -100%) rotate(${getAngle(
    date.getHours(),
    0,
    11,
    0,
    360
  )}deg)`;

  minute.style.transform = `translate(-50%, -100%) rotate(${getAngle(
    date.getMinutes(),
    0,
    59,
    0,
    360
  )}deg)`;

  second.style.transform = `translate(-50%, -100%) rotate(${getAngle(
    date.getSeconds(),
    0,
    59,
    0,
    360
  )}deg)`;

  function getAngle(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  time.innerHTML = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  dateEl.innerHTML = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } <span class='circle'>${date.getDate()}</span>`;
}

setTime();

setInterval(setTime, 1000);
