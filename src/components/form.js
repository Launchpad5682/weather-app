import React, { useState } from "react";
import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import {
  fetchWeatherDataByCity,
  fetchWeatherDataByCoordinates,
} from "../helper/fetchWeatherData";

const useStyles = makeStyles((theme) => ({}));

export function TempForm({ temp, setTemp }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    let data = await fetchWeatherDataByCity(city);
    console.log(data);
    setTemp(data);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className={useStyles}>
        <TextField
          color="primary"
          variant="outlined"
          label="Enter your City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Go Temp
        </Button>
      </FormControl>
    </form>
  );
}
