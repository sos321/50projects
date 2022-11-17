const ratings = document.querySelectorAll(".rating");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");

let selectedRating = "satisfied";

panel.addEventListener("click", (e) => {
  if (e.target.closest(".rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");

    selectedRating = e.target.getAttribute("alt");
  }
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to impove our customer support</p>
  `;
});
