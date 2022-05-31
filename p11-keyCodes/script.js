window.addEventListener('keydown', (e) => {
  insertEl.innerHTML = `
  <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>

    <div class="key">
    ${e.keyCode === ' ' ? 'Space' : e.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
    ${e.code === ' ' ? 'Space' : e.code}
      <small>event.code</small>
    </div>
  
  `;
});

const insertEl = document.querySelector('#insert');

insertEl.in;
