const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((elem) => {
  const btn = document.createElement('button');

  btn.classList.add('btn');
  btn.innerText = elem;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(elem).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((s) => {
    const audioEl = document.getElementById(s);
    audioEl.pause();
    audioEl.currentTime = 0;
  });
}
