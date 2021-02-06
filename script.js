// Weather API JavaScript
var selectedCabo = document.querySelector("#cabo");
var selectedSiesta = document.querySelector("#siesta");
var selectedHawaii = document.querySelector("#hawaii");
var selectedBreckenridge = document.querySelector("#breckenridge");
var selectedBanff = document.querySelector("#banff");
var selectedSwiss = document.querySelector("#swiss");

var weatherCabo = ("https://api.openweathermap.org/data/2.5/onecall?lat=-8.2833&lon=-35.0333&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherSiesta = ("https://api.openweathermap.org/data/2.5/onecall?lat=27.302&lon=-82.5515&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherHawaii = ("https://api.openweathermap.org/data/2.5/onecall?lat=20.785&lon=-156.4656&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBreckenridge = ("https://api.openweathermap.org/data/2.5/onecall?lat=32.7557&lon=-98.9023&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBanff = ("https://api.openweathermap.org/data/2.5/onecall?lat=51.1762&lon=-115.5698&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherSwiss = ("https://api.openweathermap.org/data/2.5/onecall?lat=47.0505&lon=8.3064&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")

function Cabo(event) {
    event.preventDefault();

    fetch(weatherCabo)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardCabo = document.getElementById(i);
            var imgIconCabo = document.createElement("img");

            var dateCabo = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardCabo.textContent = dateCabo;

            imgIconCabo.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconCabo.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardCabo.append(imgIconCabo);

            var weatherForecastCabo = document.createElement("div"); 
            weatherForecastCabo.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardCabo.append(weatherForecastCabo);

        }

    })
}

selectedCabo.addEventListener("click", Cabo)

function Siesta (event) {
    event.preventDefault();

    fetch(weatherSiesta)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardSiesta = document.getElementById(i);
            var imgIconSiesta = document.createElement("img");

            var dateSiesta = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardSiesta.textContent = dateSiesta;

            imgIconSiesta.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconSiesta.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardSiesta.append(imgIconSiesta);

            var weatherForecastSiesta = document.createElement("div"); 
            weatherForecastSiesta.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardSiesta.append(weatherForecastSiesta);

        }

    })
}

selectedSiesta.addEventListener("click", Siesta)

function Hawaii (event) {
    event.preventDefault();

    fetch(weatherHawaii)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardHawaii = document.getElementById(i);
            var imgIconHawaii = document.createElement("img");

            var dateHawaii = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardHawaii.textContent = dateHawaii;

            imgIconHawaii.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconHawaii.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardHawaii.append(imgIconHawaii);

            var weatherForecastHawaii = document.createElement("div"); 
            weatherForecastHawaii.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "%" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardHawaii.append(weatherForecastHawaii);

        }

    })
}

selectedHawaii.addEventListener("click", Hawaii)

function Breckenridge (event) {
    event.preventDefault();

    fetch(weatherBreckenridge)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardBreckenridge = document.getElementById(i);
            var imgIconBreckenridge = document.createElement("img");

            var dateBreckenridge = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardBreckenridge.textContent = dateBreckenridge;

            imgIconBreckenridge.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconBreckenridge.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardBreckenridge.append(imgIconBreckenridge);

            var weatherForecastBreckenridge = document.createElement("div"); 
            weatherForecastBreckenridge.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardBreckenridge.append(weatherForecastBreckenridge);

        }

    })
}

selectedBreckenridge.addEventListener("click", Breckenridge)

function Banff (event) {
    event.preventDefault();

    fetch(weatherBanff)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardBanff = document.getElementById(i);
            var imgIconBanff = document.createElement("img");

            var dateBanff = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardBanff.textContent = dateBanff;

            imgIconBanff.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconBanff.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardBanff.append(imgIconBanff);

            var weatherForecastBanff = document.createElement("div"); 
            weatherForecastBanff.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardBanff.append(weatherForecastBanff);

        }

    })
}

selectedBanff.addEventListener("click", Banff)

function Swiss (event) {
    event.preventDefault();

    fetch(weatherSwiss)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardSwiss = document.getElementById(i);
            var imgIconSwiss = document.createElement("img");

            var dateSwiss = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardSwiss.textContent = dateSwiss;

            imgIconSwiss.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconSwiss.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardSwiss.append(imgIconSwiss);

            var weatherForecastSwiss = document.createElement("div"); 
            weatherForecastSwiss.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardSwiss.append(weatherForecastSwiss);

        }

    })
}

selectedSwiss.addEventListener("click", Swiss)