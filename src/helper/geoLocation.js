export function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, callback);
  } else {
    console.log("No Position");
  }
}

function showPosition(position, callback) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log("Latitude " + lat);
  console.log("Longitude " + long);
  callback(lat, long);
}
