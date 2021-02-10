// Global Variables
var firstName = document.querySelector('.firstName');
var headerName = document.querySelector('header');
var mountainButton = document.querySelector("#mountains");
var beachButton = document.querySelector("#beach");
var displayBeach = document.getElementById("beachlocations");
var displayMountains = document.getElementById("mountainlocations");
var themeOptions = document.getElementById("themeoptions");
var themePictures = document.getElementById("themes");
var greeting = document.getElementById('greeting');

// Weather API JavaScript
var selectedMalibu = document.querySelector("#malibu");


// Weather API JavaScript
var selectedMalibu = document.querySelector("#malibu");
console.log(selectedMalibu);
var selectedFlKeys = document.querySelector("#flkeys");
var selectedHawaii = document.querySelector("#hawaii");
var selectedBreckenridge = document.querySelector("#breckenridge");
var selectedBanff = document.querySelector("#banff");
var selectedSnowshoe = document.querySelector("#snowshoe");

// Zomato Global Variables
var eateryList = document.querySelector("#eateryList");
var eatAt1 = document.querySelector("#eatAt1");
var eatAt2 = document.querySelector("#eatAt2");
var eatAt3 = document.querySelector("#eatAt3");

// OpenWeather URLs
var weatherMalibu = ("https://api.openweathermap.org/data/2.5/onecall?lat=34.005&lon=-118.8101&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherFlKeys = ("https://api.openweathermap.org/data/2.5/onecall?lat=24.5557&lon=-81.7826&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherHawaii = ("https://api.openweathermap.org/data/2.5/onecall?lat=20.785&lon=-156.4656&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBreckenridge = ("https://api.openweathermap.org/data/2.5/onecall?lat=32.7557&lon=-98.9023&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherBanff = ("https://api.openweathermap.org/data/2.5/onecall?lat=51.1762&lon=-115.5698&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")
var weatherSnowshoe = ("https://api.openweathermap.org/data/2.5/onecall?lat=38.4128&lon=-79.9964&exclude=current,hourly,minutely,alerts&units=imperial&appid=73764a83501606e04b74a8e0281a654b")

// Zomato URLs
var eatBanff = "https://developers.zomato.com/api/v2.1/location_details?entity_id=2866&entity_type=city"
var eatMalibu = "https://developers.zomato.com/api/v2.1/location_details?entity_id=10925&entity_type=city"
var eatFlKeys = "https://developers.zomato.com/api/v2.1/location_details?entity_id=571&entity_type=city"
var eatHawaii = "https://developers.zomato.com/api/v2.1/location_details?entity_id=640&entity_type=city"
var eatBreckenridge = "https://developers.zomato.com/api/v2.1/location_details?entity_id=4409&entity_type=city"
var eatSnowshoe = "https://developers.zomato.com/api/v2.1/location_details?entity_id=10372&entity_type=city"

// Local Storage Logic
checkLocalStorage();
function checkLocalStorage(){
    if (localStorage.getItem('destination') !== null) {
        console.log("true");
        greeting.textContent = "Welcome back "+localStorage.getItem("firstName") + "!  Your last search was "+ localStorage.getItem("destination") +". Enter your name again and click Submit to start a new search."
        // document.querySelector('.firstName').remove();
    } else {
        document.querySelector('.button').addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.bg-modal').style.display = 'none';
            localStorage.setItem("firstName", firstName.value);
        });
    };

    
}

// Code for Modal 1
// Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();
    if (firstName.value === "") {
        document.querySelector('.bg-modal').style.display = 'none';
    }   else {
        headerName.textContent = "Plan Your Next Vacation, " + firstName.value + "!";
    console.log(firstName.value);
    console.log(headerName.textContent);
    document.querySelector('.bg-modal').style.display = 'none';
    localStorage.setItem("firstName", firstName.value);
    }
});

localStorage.getItem('firstName');

// Code for Modal 2
// Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
document.querySelector('.firstSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    // Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
    document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.bg-modal').style.display = 'none';
});

// Code for Modal 3 - mountain theme
mountainButton.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal2').style.display = 'none';
    document.querySelector(".bg-modal3").style.display = "flex";
});

// Code for Modal 4 - beach theme
beachButton.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal2').style.display = 'none';
    document.querySelector(".bg-modal4").style.display = "flex";
});

//Code to display Malibu weather and eateries
selectedMalibu.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal4').style.display = 'none';
    localStorage.setItem("destination", selectedMalibu.value);
    document.querySelector('.bg-modal').style.display = 'none';
});

//Code to display Florida keys weather and eateries
selectedFlKeys.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal4').style.display = 'none';
    localStorage.setItem("destination", selectedFlKeys.value);

    document.querySelector('.bg-modal').style.display = 'none';
});

//Code to display Hawaii weather and eateries
selectedHawaii.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal4').style.display = 'none';
    localStorage.setItem("destination", selectedHawaii.value);
    document.querySelector('.bg-modal').style.display = 'none';
});

//Code to display Breckenridge weather and eateries
selectedBreckenridge.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal3').style.display = 'none';
    localStorage.setItem("destination", selectedBreckenridge.value);
    document.querySelector('.bg-modal').style.display = 'none';
});

//Code to display Banff weather and eateries
selectedBanff.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal3').style.display = 'none';
    localStorage.setItem("destination", selectedBanff.value);
    document.querySelector('.bg-modal').style.display = 'none'; 
});

//Code to display Snowshoe weather and eateries
selectedSnowshoe.addEventListener('click', function(){
    event.preventDefault();
    document.querySelector('.bg-modal3').style.display = 'none';
    localStorage.setItem("destination", selectedSnowshoe.value);
    document.querySelector('.bg-modal').style.display = 'none';
});

// Storing the first name to local storage.
localStorage.getItem('firstName');
    document.querySelector('.bg-modal2').style.display = 'flex';
    localStorage.setItem("firstName", firstName.value);
});

// Storing the first name to local storage.
localStorage.getItem('firstName');

// Malibu Weather Fetch
function malibu(event) {
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
            imgIconMalibu.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardMalibu.append(imgIconMalibu);

            var weatherForecastMalibu = document.createElement("div"); 
            weatherForecastMalibu.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F" 
            var malibuNightTemp = document.createElement("div");
            malibuNightTemp.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F"
            var humidityMalibu = document.createElement("div");
            humidityMalibu = "Humidity: " + data.daily[i].humidity + "%";
            var windMalibu = document.createElement("div");
            windMalibu.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            weatherForecastMalibu.style = "justify-content: center;"
            malibuNightTemp.style = "justify-content: center;"
            humidityMalibu.style = "justify-content: center;"
            windMalibu.style = "justify-content: center;"
            weatherCardMalibu.append(weatherForecastMalibu, malibuNightTemp, humidityMalibu, windMalibu);
        }
    })
    getEatMalibu(eatMalibu);
}

// Fetch Malibu Zomato
function getEatMalibu (url){
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
      }}) 
    .then( function(response){
        return response.json()
    })
    .then(function (data) {
        eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
        eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
        eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
    });
}

selectedMalibu.addEventListener("click", malibu)

// Fetch Florida Keys Weather
function flKeys (event) {
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
            imgIconFlKeys.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardFlKeys.append(imgIconFlKeys);

            var weatherForecastFlKeys = document.createElement("div"); 
            weatherForecastFlKeys.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
            weatherForecastFlKeys.style = "justify-content: center;"
            var flKeysNight = document.createElement("div");
            flKeysNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
            flKeysNight.style = "justify-content: center;"
            var flHumidity = document.createElement("div");
            flHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
            flHumidity.style = "justify-content: center;"
            var flWind = document.createElement("div");
            flWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            flWind.style = "justify-content: center;"

            weatherCardFlKeys.append(weatherForecastFlKeys, flKeysNight, flHumidity, flWind);

        }

    })
    getEatFlKeys(eatFlKeys);
}

// Fetch Florida Keys Eatery
function getEatFlKeys (url){
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
      }}) 
    .then( function(response){
        return response.json()
    })
    .then(function (data) {
        eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
        eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
        eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
    });
}

selectedFlKeys.addEventListener("click", flKeys)

// Fetch Hawaii Weather
function hawaii (event) {
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
            imgIconHawaii.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardHawaii.append(imgIconHawaii);

            var weatherForecastHawaii = document.createElement("div"); 
            weatherForecastHawaii.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F"; 
            weatherForecastHawaii.style = "justify-content: center;"
            var hawaiiNight = document.createElement("div");
            hawaiiNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
            hawaiiNight.style = "justify-content: center;"
            var hawaiiHumidity = document.createElement("div");
            hawaiiHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
            hawaiiHumidity.style = "justify-content: center;"
            var hawaiiWind = document.createElement("div");
            hawaiiWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            hawaiiWind.style = "justify-content: center;"
            weatherCardHawaii.append(weatherForecastHawaii, hawaiiNight, hawaiiHumidity, hawaiiWind);
        }
    })
    getEatHawaii(eatHawaii);
}

// Fetch Hawaii Eatery
function getEatHawaii (url){
   fetch(url, {headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
     }}) 
   .then( function(response){
       return response.json()
   })
   .then(function (data) {
       eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
       eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
       eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
   });
}

selectedHawaii.addEventListener("click", hawaii)

// Fetch Breckenridge Weather
function breckenridge (event) {
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
            imgIconBreckenridge.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardBreckenridge.append(imgIconBreckenridge);

            var weatherForecastBreckenridge = document.createElement("div"); 
            weatherForecastBreckenridge.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
            weatherForecastBreckenridge.style = "justify-content: center;"
            var breckNight = document.createElement("div");
            breckNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
            breckNight.style = "justify-content: center;"
            var breckHumidity = document.createElement("div");
            breckHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
            breckHumidity.style = "justify-content: center;"
            var breckWind = document.createElement("div");
            breckWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            breckWind.style = "justify-content: center;"
            weatherCardBreckenridge.append(weatherForecastBreckenridge, breckNight, breckHumidity, breckWind);
        }
    })
    getEatBreckenridge(eatBreckenridge);
}

// Fetch Breckenridge Eatery
function getEatBreckenridge (url){
   fetch(url, {headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
     }}) 
   .then( function(response){
       return response.json()
   })
   .then(function (data) {
       eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
       eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
       eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
   });
}

selectedBreckenridge.addEventListener("click", breckenridge)

// Fetch Banff Weather
function banff (event) {
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
            imgIconBanff.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardBanff.append(imgIconBanff);

            var weatherForecastBanff = document.createElement("div"); 
            weatherForecastBanff.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
            weatherForecastBanff.style = "justify-content: center;"
            var banffNight = document.createElement("div");
            banffNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
            banffNight.style = "justify-content: center;"
            var banffHumidity = document.createElement("div");
            banffHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
            banffHumidity.style = "justify-content: center;"
            var banffWind = document.createElement("div");
            banffWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            banffWind.style = "justify-content: center;"

            weatherCardBanff.append(weatherForecastBanff, banffNight, banffHumidity, banffWind);
        }
    })
    getEatBanff(eatBanff);
}

// Fetch Banff Eatery
function getEatBanff (url){
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
      }}) 
    .then( function(response){
        return response.json()
    })
    .then(function (data) {
        eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
        eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
        eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
    });
}

selectedBanff.addEventListener("click", banff)

// Fetch Snowshoe Weather
function snowshoe (event) {
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
            imgIconSnowshoe.style = "width: 45px; height: 45px; justify-content: center;"
            weatherCardSnowshoe.append(imgIconSnowshoe);

            var weatherForecastSnowshoe = document.createElement("div"); 
            weatherForecastSnowshoe.innerHTML = "Day Temp: " + data.daily[i].temp.day + "°F";
            weatherForecastSnowshoe.style = "justify-content: center;"
            var snowshoeNight = document.createElement("div");
            snowshoeNight.innerHTML = "Night Temp: " + data.daily[i].temp.night + "°F";
            snowshoeNight.style = "justify-content: center;"
            var snowshoeHumidity = document.createElement("div");
            snowshoeHumidity.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
            snowshoeHumidity.style = "justify-content: center;"
            var snowshoeWind = document.createElement("div");
            snowshoeWind.innerHTML = "Wind Speed: " + data.daily[i].wind_speed + "MPH";
            snowshoeWind.style = "justify-content: center;"
            weatherCardSnowshoe.append(weatherForecastSnowshoe, snowshoeNight, snowshoeHumidity, snowshoeWind);
        }
    })
    getEatSnowshoe(eatSnowshoe);
}

// Fetch Snowshoe Eatery
function getEatSnowshoe (url){
   fetch(url, {headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'user-key': "e520bba2bf7f434d5803aa5e81d5ad4a",
     }}) 
   .then( function(response){
       return response.json()
   })
   .then(function (data) {
       eatAt1.textContent = data.best_rated_restaurant[0].restaurant.name
       eatAt2.textContent = data.best_rated_restaurant[1].restaurant.name
       eatAt3.textContent = data.best_rated_restaurant[2].restaurant.name
   });
}

selectedSnowshoe.addEventListener("click", snowshoe);
