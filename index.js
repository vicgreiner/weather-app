function submittingCity(event) {
  let searchBar = document.querySelector("#searchbarCity");
  let cityName = searchBar.value;

  if (cityName == "") {
    submittingGPS();
  } else {
    let answer = document.querySelector("#answer");
    answer.innerHTML = cityName;

    let city = cityName;
    let key = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${measurementUnit}`;
    axios.get(url).then(displaytemp);
  }
}

function displaytemp(response) {
  let temperature = Math.round(response.data.main.temp);

  let weatherDivC = document.querySelector("#tempC");
  let weatherDivF = document.querySelector("#tempF");

  if (measurementUnit == "metric") {
    weatherDivC.innerHTML = temperature + " ";
    weatherDivF.innerHTML = "";
  } else {
    weatherDivC.innerHTML = "";
    weatherDivF.innerHTML = temperature + " ";
  }

  displayWindSpeed(Math.round(response.data.wind.speed));
  displayWindDescription(response.data.weather[0].description);
  IconWeather(response.data.weather[0].icon);
}

function displayWindSpeed(speed) {
  let h4 = document.querySelector("h4");
  if (h4) {
    h4.innerHTML = `${speed} km/hour`;
  }
}
function displayWindDescription(description) {
  let h5 = document.querySelector("h5");
  if (h5) {
    h5.innerHTML = description;
  }
}

function submittingGPS(event) {
  navigator.geolocation.getCurrentPosition(givePosition);
}
function givePosition(position) {
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=${measurementUnit}`;

  axios.get(url).then(displaytempAndGPS);
}
function displaytempAndGPS(response) {
  let temperature = Math.round(response.data.main.temp);

  let weatherDivC = document.querySelector("#tempC");
  let weatherDivF = document.querySelector("#tempF");

  if (measurementUnit == "metric") {
    weatherDivC.innerHTML = temperature + " ";
    weatherDivF.innerHTML = "";
  } else {
    weatherDivC.innerHTML = "";
    weatherDivF.innerHTML = temperature + " ";
  }

  let city = response.data.name;
  let answer = document.querySelector("#answer");
  let lon = response.data.coord.lon;
  let lat = response.data.coord.lat;
  answer.innerHTML = city + ` with the positions ` + lon + ` / ` + lat;

  displayWindSpeed(Math.round(response.data.wind.speed));
  displayWindDescription(response.data.weather[0].description);
  IconWeather(response.data.weather[0].icon);
}

let searchBar = document.querySelector("#searchbarCity");
if (searchBar) {
  searchBar.addEventListener("search", submittingCity);
}

let gPSButton = document.querySelector("#GPSButton");
if (gPSButton) {
  gPSButton.addEventListener("click", submittingGPS);
}
navigator.geolocation.getCurrentPosition(givePosition);

const date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = date.getDate();
let dayName = days[date.getDay()];
let monthName = months[date.getMonth()];
let hours = date.getHours();
let minutes = date.getMinutes();

let h2 = document.querySelector("h2");
if (h2) {
  h2.innerHTML = `${dayName} ${day}, ${monthName} ${hours}:${minutes}`;
}

let measurementUnit = "metric";

function GotoCelscius(event) {
  event.preventDefault();
  measurementUnit = "metric";

  submittingCity();
}

function GoFar(event) {
  event.preventDefault();
  measurementUnit = "imperial";

  submittingCity();
}

let far = document.querySelector("#farhenheitL");
if (far) {
  far.addEventListener("click", GoFar);
}

let celc = document.querySelector("#celsciusL");
if (celc) {
  celc.addEventListener("click", GotoCelscius);
}

function IconWeather(weatherDesc) {
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${weatherDesc}@2x.png`
  );
  iconElement.setAttribute("alt", weatherDesc);
}
