const tagsEls = document.getElementById('tags');
const textAreaEl = document.getElementById('textarea');

textAreaEl.focus();

textAreaEl.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  // enter
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(inputValue) {
  const tags = inputValue
    .split(',')
    .filter((n) => n.trim() !== '')
    .map((t) => t.trim());

  tagsEls.innerHTML = '';

  tags.forEach((t) => {
    const newTag = document.createElement('span');
    newTag.classList.add('tag');
    newTag.innerHTML = t;
    tagsEls.appendChild(newTag);
  });
}

function randomSelect() {
  const runXTimes = 30;
  const eachRunMs = 100;

  // infinite run highlight!
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, eachRunMs);
  }, eachRunMs);

  // stopping interval!
  setTimeout(() => {
    clearInterval(interval);

    // for last highlight
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, eachRunMs);
  }, runXTimes * eachRunMs);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');

  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
