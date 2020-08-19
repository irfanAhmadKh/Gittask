var input = document.querySelector('input');
var cityName = document.getElementsByClassName('cityName')[0];
var countryName = document.getElementsByClassName('countryName')[0];
var temp = document.getElementsByClassName('temp')[0];
var minMaxTemp = document.getElementsByClassName('min-max-temp')[0];

input.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) get();
});

var get = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=c5a520161fa2e4b56734c116a8cfcd71`).then(data => data.json()).then(data => showData(data));
}

var showData = (data) => {
    console.log(data);
    cityName.innerHTML = `City: ${data.name}`;
    countryName.innerHTML = `Country: ${data.sys.country}`;
    temp.innerHTML = `Temperature: ${data.main.temp}&deg;c`;
    minMaxTemp.innerHTML = `Min Temp ${data.main.temp_min} - Max Temp ${data.main.temp_max}`;
}