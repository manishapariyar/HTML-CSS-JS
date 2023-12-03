const btn = document.querySelector(`#searchBtn`);
const inputbox = document.getElementsByClassName(`ipnut_box`);
const weatherImg = document.querySelector(`.weather_image`);
const temperature  = document.querySelector(`.temperature`);
const description = document.querySelector(`.description`);
const humidity = document.querySelector(`#humidity`);
const wind_speed = document.querySelector(`#wind_speed`);

  async function checkweather(city){
    const api_key= "48c25d6cf9461915299e317c93c72030"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${api_key}`;
    const weather_data =  await fetch(`${url}`).then(response=>response.json());
    console.log(weather_data)

}
btn,addEventListener('click', ()=>{
    checkweather(inputbox.value);
});

