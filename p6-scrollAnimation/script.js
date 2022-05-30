const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

const triggerPoint = (window.innerHeight * 4) / 5;

function checkBoxes() {
  boxes.forEach((box) => {
    const boxTopPotisionY = box.getBoundingClientRect().top;

    if (triggerPoint > boxTopPotisionY) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

checkBoxes();
