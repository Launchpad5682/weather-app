import React, { useState, useContext } from "react";
import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import { fetchWeatherDataByCity } from "../helper/fetchWeatherData";
import { TempContext } from "../context/tempContext";

const useStyles = makeStyles((theme) => ({}));

export function TempForm() {
  const { tempData, setTempData } = useContext(TempContext);
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    let data = await fetchWeatherDataByCity(city);
    console.log(data);
    setTempData(data);
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
