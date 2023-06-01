let quate = document.getElementById('quate');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

const url = "https://api.quotable.io/random";

let randomQuate = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quate.innerText = item.content;
        author.innerText = item.author;
    })
}
window.addEventListener('load', randomQuate);
btn.addEventListener('click', randomQuate);



