const panelEls = document.querySelectorAll('.panel');

panelEls.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClassFromPanel();
    panel.classList.add('active');
  });
});

function removeActiveClassFromPanel() {
  panelEls.forEach((panel) => {
    panel.classList.remove('active');
  });
}
