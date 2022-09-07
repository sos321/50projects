const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80" alt="Laptop Image"/>';

  title.innerText = "Lorem ipsum dolor sit amet.";
  excerpt.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quibusdam.";

  profileImg.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile Image"/>';

  name.innerText = "John Doe";
  date.innerText = "Oct 08, 2022";

  animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedTexts.forEach((text) => text.classList.remove("animated-bg-text"));
}
