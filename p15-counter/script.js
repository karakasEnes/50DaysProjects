const counters = document.querySelectorAll('.counter');

counters.forEach((counterEl) => {
  counterEl.innerText = '0';

  const updateCounter = () => {
    const targetCounterNumber = counterEl.getAttribute('data-target');
    const c = +counterEl.innerText;

    const increment = targetCounterNumber / 200;

    if (c < targetCounterNumber) {
      counterEl.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counterEl.innerText = targetCounterNumber;
    }
  };

  updateCounter();
});
