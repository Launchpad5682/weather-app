// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

import axios from "axios";

let endpoint = "https://api.openweathermap.org/data/2.5/weather?";
let access_key = "&appid=ffab998f7678dc6ab184b50e7a1d5d18";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);

    const data = response.data;

    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export async function fetchWeatherDataByCity(city) {
  let url = endpoint + "q=" + city + access_key + "&units=metric";
  console.log(url);

  const data = await fetchData(url);

  return {
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
  };
}

//https://api.openweathermap.org/data/2.5/weather?lat=24.6051003&lon=73.7079388&appid=ffab998f7678dc6ab184b50e7a1d5d18
export async function fetchWeatherDataByCoordinates(lat, long) {
  //let url = endpoint + "lat=" + lat + "&lon=" + long + "&appid=" + access_key;
  let url =
    endpoint + "lat=" + lat + "&lon=" + long + access_key + "&units=metric";
  console.log(url);

  const data = await fetchData(url);

  return {
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
  };
}

function fetchWeatherDataByZipCountry(zip, countryCode) {}
