const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.dataset.target;
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
