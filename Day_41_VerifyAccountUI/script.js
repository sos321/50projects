const codes = document.querySelectorAll('input[type="number"]');

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => codes[i + 1].focus(), 10);
    }
  });
});
