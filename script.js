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
    })
}

selectedCabo.addEventListener("click", Cabo)