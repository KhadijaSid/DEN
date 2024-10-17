function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote").innerText = data.setup;
        document.getElementById("punchline").innerText = data.punchline;
      })
      .catch((error) => console.error("Error fetching the joke:", error));
  }
  document.getElementById("new-quote").addEventListener("click", fetchJoke);