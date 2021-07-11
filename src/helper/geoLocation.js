export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No Position");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log("Latitude " + lat);
  console.log("Longitude " + long);

  return { lat, long };
}
