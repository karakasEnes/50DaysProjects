window.addEventListener('keydown', (e) => {
  insertEl.innerHTML = `
  <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>

    <div class="key">
    ${e.keyCode === ' ' ? 'Space' : e.key}
      <small>event.keyCode</small>
    </div>

    <div class="key">
    ${e.code === ' ' ? 'Space' : e.key}
      <small>event.code</small>
    </div>
  
  `;
});

const insertEl = document.querySelector('#insert');

insertEl.in;
