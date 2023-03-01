let jokeBtnEl = document.getElementById("jokeBtn");
let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET"
};

function getRandomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let random = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = random;
        });
}
jokeBtnEl.addEventListener("click", getRandomJoke)