import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

function fetchWeatherData() {
  console.log("Console Weather data logged");
}

export function GoButton() {
  return (
    <Button variant="contained" color="secondary" onClick={fetchWeatherData}>
      Go Temp
    </Button>
  );
}
