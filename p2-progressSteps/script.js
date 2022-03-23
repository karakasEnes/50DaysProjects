const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressEl = document.getElementById('progress');
const circleEls = document.querySelectorAll('.circle');

let activeCircleIndex = 1;

nextBtn.addEventListener('click', () => {
  activeCircleIndex++;

  if (activeCircleIndex > circleEls.length) {
    activeCircleIndex = circleEls.length;
  }

  updateDOM();
});

prevBtn.addEventListener('click', () => {
  activeCircleIndex--;

  if (activeCircleIndex < 1) {
    activeCircleIndex = 1;
  }

  updateDOM();
});

function updateDOM() {
  circleEls.forEach((circle, index) => {
    if (activeCircleIndex > index) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  //handle nextBtn and prevBtn disabled
  if (activeCircleIndex === 1) {
    prevBtn.disabled = true;
  } else if (activeCircleIndex === circleEls.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  //progressBar width
  const calculationForBar =
    ((activeCircleIndex - 1) / (circleEls.length - 1)) * 100 + '%';

  progressEl.style.width = calculationForBar;
}
