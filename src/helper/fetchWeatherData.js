// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

import axios from "axios";

let endpoint = "https://api.openweathermap.org/data/2.5/weather?";
let access_key = "ffab998f7678dc6ab184b50e7a1d5d18";

function fetchWeatherDataByCity(city, state, country) {}

//https://api.openweathermap.org/data/2.5/weather?lat=24.6051003&lon=73.7079388&appid=ffab998f7678dc6ab184b50e7a1d5d18
export function fetchWeatherDataByCoordinates(lat, long) {
  let url = endpoint + "lat=" + lat + "&lon=" + long + "&appid=" + access_key;

  console.log(url);
  //let tempData = fetch(url);
}

function fetchWeatherDataByZipCountry(zip, countryCode) {}
