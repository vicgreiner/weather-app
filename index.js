function submittingCity(event) {
  let searchBar = document.querySelector("#searchbarCity");
  let cityName = searchBar.value;

  let answer = document.querySelector("#answer");
  answer.innerHTML = cityName;

  let city = cityName;
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displaytemp);
}
function displaytemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let weatherDiv = document.querySelector("#temp");

  weatherDiv.innerHTML = temperature;
}

function submittingGPS(event) {
  navigator.geolocation.getCurrentPosition(givePosition);
}
function givePosition(position) {
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;

  axios.get(url).then(displaytempAndGPS);
}
function displaytempAndGPS(response) {
  let temperature = Math.round(response.data.main.temp);
  let weatherDiv = document.querySelector("#temp");
  weatherDiv.innerHTML = temperature;

  let city = response.data.name;
  let answer = document.querySelector("#answer");
  let lon = response.data.coord.lon;
  let lat = response.data.coord.lat;
  answer.innerHTML = city + ` with the positions ` + lon + ` / ` + lat;
}

let searchBar = document.querySelector("#searchbarCity");
if (searchBar) {
  searchBar.addEventListener("search", submittingCity);
}

let gPSButton = document.querySelector("#GPSButton");
if (gPSButton) {
  gPSButton.addEventListener("click", submittingGPS);
}

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
