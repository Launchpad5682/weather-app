import React, { useState, useContext } from "react";
import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import { fetchWeatherDataByCity } from "../helper/fetchWeatherData";
import { TempContext } from "../context/tempContext";

const useStyles = makeStyles({
  root: {
    //   background: "yellow",
    //   color: "green",
    width: "200px",
    margin: "auto",
    padding: "10px 0",
  },
});

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
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormControl>
        <TextField
          color="primary"
          variant="outlined"
          /*label="Enter your City"*/
          placeholder="Enter your City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Button variant="contained" color="secondary" type="submit">
          Go Temp
        </Button>
      </FormControl>
    </form>
  );
}
