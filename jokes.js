fetch ('https://v2.jokeapi.dev/joke/Any?safe-mode')

.then (response =>response.json())
.then (data => {
    joke.textContent = data.joke || data.setup + "..." + data.delivery;
})