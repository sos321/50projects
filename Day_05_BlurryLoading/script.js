const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let loading = setInterval(blurring, 50);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(loading);
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = `${1 - load / 100}`;
    bg.style.filter = `blur(${mapNumbers(load, 0, 100, 30, 0)}px)`;
}

function mapNumbers(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
