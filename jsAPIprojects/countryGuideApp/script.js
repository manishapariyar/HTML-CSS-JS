



 const result = document.getElementById('result');
  const btn = document.getElementById('search-btn');
  // const countyInp = document.getElementById('country-inp')

   btn.addEventListener('click', ()=>{
    let country = document.querySelector('#country-inp').value;
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    console.log(url);

     fetch(url)
     .then((res)=> res.json())
     .then((data) => {
       result.innerHTML = `
       <div class="flags"><img src = '${data[0].flags.svg}'></div> 
       <div class="infocontainer">
        <div class="capital first">
          <div>Capital :</div> 
        <div id="capital">${data[0].capital}</div>
        </div>
        <div class="capital">
          <div>Continent:</div> 
        <div id="Continent">${data[0].region}</div>
        </div>
        <div class="capital">
          <div>Population:</div> 
        <div id="Population">${data[0].population}</div>
        </div>
        <div class="capital">
          <div>Currency:</div> 
        <div id="Currency">${data[0].currencies[Object.keys(data[0].currencies)].name}- ${Object.keys(data[0].currencies)}</div>
        </div>
        <div class="capital">
          <div>Common Language:</div> 
        <div id="Language">${Object.values(data[0].languages)
        .toString()
      .split(",")
    .join(",")}</div>
        </div>
        
       </div>`
     })
   });
  