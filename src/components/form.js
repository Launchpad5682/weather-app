import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { fetchWeatherDataByCity } from "../helper/fetchWeatherData";
import { TempContext } from "../context/tempContext";

const useStyles = makeStyles((theme) => ({
  root: {
    //background: "yellow",
    //   color: "green",
    width: "200px",
    margin: "auto",
    padding: "10px 0",
  },
  search: {
    // margin: "10px 0",
    // padding: "0 2px",
    margin: "auto",
    marginBottom: 10,
  },
}));

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
          placeholder="Search a city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            console.log(e.target.value);
          }}
          fullWidth
          className={classes.search}
        />
        <Button variant="contained" color="secondary" type="submit">
          Go Temp
        </Button>
      </FormControl>
    </form>
  );
}
