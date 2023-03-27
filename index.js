function submittingE(event) {
  let input = document.querySelector("#searchbarCity");
  let h1 = document.querySelector("h1");

  h1.innerHTML = input.value;
}

function GotoCelscius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "22";
}

function GoFar(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = "123";
}

let far = document.querySelector("#farhenheitL");
if (far) {
  far.addEventListener("click", GoFar);
}

let celc = document.querySelector("#celsciusL");
if (celc) {
  celc.addEventListener("click", GotoCelscius);
}

let searchBar = document.querySelector("#searchbarCity");
if (searchBar) {
  searchBar.addEventListener("search", submittingE);
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
