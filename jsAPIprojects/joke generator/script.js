const jokeContainer = document.getElementById('joke')
const btn  = document.getElementById('generateBtn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// async function fetchJokes(){
//   let response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
let getjoke = ()=>{
  fetch(url)
  .then(data=>data.json())
  .then(item =>
    jokeContainer.innerHTML = `${item.joke}`
  )
}
 btn.addEventListener('click' , () =>{
  getjoke();
 })