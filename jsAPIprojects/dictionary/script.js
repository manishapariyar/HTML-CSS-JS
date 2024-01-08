const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"



 const result = document.getElementById('result');
 const sound = document.getElementById('sound');
  const btn = document.getElementById('search-btn');

   btn.addEventListener('click', ()=>{
    let word = document.querySelector('#inp-word').value;
     fetch(`${url}${word}`)
     .then((res)=> res.json())
     .then((data) => {
      result.innerHTML = `
      <div class="word">
      <h3>${word}</h3>
      <button onclick = "playsound()">
        <i class="fa-solid fa-volume-high"></i>
      </button>
    </div>
    <div class="details">
      <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
     ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
    ${data[0].meanings[0].definitions[0].example}
    </p>`;
    sound.setAttribute('src', `https:${data[0].phonetics[0].audio}`);
     })
     .catch(()=>{
      result.innerHTML = `<h3 class= "error"> couldn't find The word </h3>`
     })
   });
   function playsound(){
    sound.play();
   }