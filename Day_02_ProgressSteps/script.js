const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let state = 1;

next.addEventListener("click", () => {
    state++;

    if (state > circles.length) {
        state = circles.length;
    }

    update();
});

prev.addEventListener("click", () => {
    state--;

    if (state < 1) {
        state = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, id) => {
        if (id < state) circle.classList.add("active");
        else circle.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (state === 1) prev.disabled = true;
    else if (state === circles.length) next.disabled = true;
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
