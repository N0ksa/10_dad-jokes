const jokeElement = document.querySelector(".joke");
const jokeButton = document.querySelector(".btn");

function generateJoke(){

    const configuration = {
        headers: {
            "Accept": "application/json",
        }
    }

    fetch("https://icanhazdadjoke.com", configuration)
        .then((response) => response.json())
        .then((response) => {
            jokeElement.innerHTML = response.joke;
        });
    
}


generateJoke();
jokeButton.addEventListener("click", generateJoke);