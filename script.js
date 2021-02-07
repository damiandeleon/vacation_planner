// Weather API JavaScript
var selectedMalibu = document.querySelector("#malibu");
console.log(selectedMalibu);
var selectedFlKeys = document.querySelector("#flkeys");
var selectedHawaii = document.querySelector("#hawaii");
var selectedBreckenridge = document.querySelector("#breckenridge");
var selectedBanff = document.querySelector("#banff");
var selectedSnowshoe = document.querySelector("#snowshoe");

var weatherMalibu = ("https://api.openweathermap.org/data/2.5/onecall?lat=34.005&lon=-118.8101&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherFlKeys = ("https://api.openweathermap.org/data/2.5/onecall?lat=24.5557&lon=-81.7826&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherHawaii = ("https://api.openweathermap.org/data/2.5/onecall?lat=20.785&lon=-156.4656&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBreckenridge = ("https://api.openweathermap.org/data/2.5/onecall?lat=32.7557&lon=-98.9023&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBanff = ("https://api.openweathermap.org/data/2.5/onecall?lat=51.1762&lon=-115.5698&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherSnowshoe = ("https://api.openweathermap.org/data/2.5/onecall?lat=38.4128&lon=-79.9964&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var eatFlKeys = "https://developers.zomato.com/api/v2.1/location_details?entity_id=2866&entity_type=city"


function Malibu(event) {
    event.preventDefault();

    fetch(weatherMalibu)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardMalibu = document.getElementById(i);
            var imgIconMalibu = document.createElement("img");

            var dateMalibu = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardMalibu.textContent = dateMalibu;

            imgIconMalibu.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconMalibu.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardMalibu.append(imgIconMalibu);

            var weatherForecastMalibu = document.createElement("div"); 
            weatherForecastMalibu.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardMalibu.append(weatherForecastMalibu);

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;
            
        }

    })
}
console.log(selectedMalibu);
selectedMalibu.addEventListener("click", Malibu)

function FlKeys (event) {
    event.preventDefault();

    fetch(weatherFlKeys)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardFlKeys = document.getElementById(i);
            var imgIconFlKeys = document.createElement("img");

            var dateFlKeys = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardFlKeys.textContent = dateFlKeys;

            imgIconFlKeys.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconFlKeys.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardFlKeys.append(imgIconFlKeys);

            var weatherForecastFlKeys = document.createElement("div"); 
            weatherForecastFlKeys.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardFlKeys.append(weatherForecastFlKeys);

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;
        }

    })
}

selectedFlKeys.addEventListener("click", FlKeys)

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

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;
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

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;
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

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;
        }

    })
}

selectedBanff.addEventListener("click", Banff)

function Snowshoe (event) {
    event.preventDefault();

    fetch(weatherSnowshoe)
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (i=1; i < 6; i++) {
            var weatherCardSnowshoe = document.getElementById(i);
            var imgIconSnowshoe = document.createElement("img");

            var dateSnowshoe = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US");
            weatherCardSnowshoe.textContent = dateSnowshoe;

            imgIconSnowshoe.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png");
            imgIconSnowshoe.style = "width: 45px; height: 45px; display: inline-block;"
            weatherCardSnowshoe.append(imgIconSnowshoe);

            var weatherForecastSnowshoe = document.createElement("div"); 
            weatherForecastSnowshoe.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" + "Night Temp: " + data.daily[i].temp.night + "°F" + "Humidity" + data.daily[i].humidity + "%" + "Wind Speed" + data.daily[i].wind_speed + "MPH";
            weatherCardSnowshoe.append(weatherForecastSnowshoe);

            document.querySelector(".card1").hidden = false;
            document.querySelector(".card2").hidden = false;
            document.querySelector(".card3").hidden = false;
            document.querySelector(".card4").hidden = false;
            document.querySelector(".card5").hidden = false;

        }

    })
}
getEatFlKeys(eatFlKeys);
function getEatFlKeys (url){
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
        // 'Authorization': 'Bearer ' + "e520bba2bf7f434d5803aa5e81d5ad4a"
      }}) 
    .then(response => response.json())
    .then(data => console.log(data));
}
selectedSnowshoe.addEventListener("click", Snowshoe)

// Takes selections and saves them to local storage.
// document.querySelector('.saveButton').addEventListener('click', function(event){
//     event.preventDefault();
//     localStorage.setItem("saveDetails", JSON.stringify());
//     document.querySelector('').style.display = 'none';
// });