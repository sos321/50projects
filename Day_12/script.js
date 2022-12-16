const faq = document.querySelector(".faq-container");

faq.addEventListener("click", (e) => {
  e.target.closest(".faq").classList.toggle("active");
});
