const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

generateJoke()

async function generateJoke (){
  const url = 'https://icanhazdadjoke.com';
  const config = {headers: {
    'Accept': 'application/json'
  }};
  
  const res = await fetch(url, config);
  
  const data = await res.json();
  
  jokeEl.innerHTML = data.joke;
}

btn.addEventListener('click', generateJoke);
