fetch ('https://v2.jokeapi.dev/joke/Any?safe-mode')

.then (response =>response.json())
.then (data => {
    console.log(data);
    joke.textContent = data.joke || data.setup + "..." + data.delivery;
});

/* Get a Programming joke */
document.getElementById("programming").addEventListener("click", () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then (response =>response.json())
    .then (data => {
        console.log(data);
        title.textContent = "A Random Programming Joke";
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
})

/* Get a Miscellaneous joke */
document.getElementById("miscallaneous").addEventListener("click", () => {
    fetch('https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode')
    .then (response =>response.json())
    .then (data => {
        console.log(data);
        title.textContent = "A Random Miscellaneous Joke";
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
})

/* Get a Pun joke */
document.getElementById("pun").addEventListener("click", () => {
    fetch('https://v2.jokeapi.dev/joke/Pun?safe-mode')
    .then (response =>response.json())
    .then (data => {
        console.log(data);
        title.textContent = "A Random Pun Joke";
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
})

/* Get a Spooky joke */
document.getElementById("spooky").addEventListener("click", () => {
    fetch('https://v2.jokeapi.dev/joke/Spooky?safe-mode')
    .then (response =>response.json())
    .then (data => {
        console.log(data);
        title.textContent = "A Random Spooky Joke";
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
})

/* Get a Spooky joke */
document.getElementById("christmas").addEventListener("click", () => {
    fetch('https://v2.jokeapi.dev/joke/Christmas?safe-mode')
    .then (response =>response.json())
    .then (data => {
        console.log(data);
        title.textContent = "A Random Christmas Joke";
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
})