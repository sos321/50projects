const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    buttonsDiv.appendChild(btn);
});

buttonsDiv.addEventListener("click", e => {
    stopAudio();

    document.getElementById(e.target.innerText).play();
});

function stopAudio() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);

        audio.pause();
        audio.currentTime = 0;
    });
}
