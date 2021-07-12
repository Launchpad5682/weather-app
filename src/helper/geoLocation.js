import { fetchWeatherDataByCoordinates } from "./fetchWeatherData";

// need to write a custom hook for the same
export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation
      .getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        return { latitude, longitude };
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}
