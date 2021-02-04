// Weather API JavaScript
var selectedCabo = document.querySelector("#cabo");
var selectedSiesta = document.querySelector("#siesta");
var selectedHawaii = document.querySelector("#hawaii");
var selectedBreckenridge = document.querySelector("#breckenridge");
var selectedBanff = document.querySelector("#banff");
var selectedSwiss = document.querySelector("#swiss");

var weatherCabo = (https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&units=imperial&appid=73764a83501606e04b74a8e0281a654b)
var weatherSiesta = 
var weatherHawaii = 
var weatherBreckenridge =
var weatherBanff =
var weatherSwiss =
function currentWeather(event) {
    event.preventDefault();

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity.value + "&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })

    ForecastForFiveDays(lat, log)
}
function ForecastForFiveDays(lat, log) {


}