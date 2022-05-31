const btnGetJoke = document.querySelector('.btn');
const jokeText = document.querySelector('.joke');

const URL = 'https://icanhazdadjoke.com/';

btnGetJoke.addEventListener('click', getJoke);

function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const fethedData = fetch(URL, config)
    .then((res) => res.json())
    .then((data) => {
      jokeText.innerText = data.joke;
    });
}

getJoke();
