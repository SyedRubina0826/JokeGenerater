const container = document.getElementById("joke");
const btn = document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit";
// const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=73a6e605014a449b93fc606c1ab38f08';

let getjoke=()=>{
    container.classList.remove("fade");
    fetch(url)
    .then(data =>data.json())
    .then(item=> {
        container.textContent = `${item.joke}`;
        container.classList.add("fade");
    });
}
btn.addEventListener("click",getjoke);
getjoke();