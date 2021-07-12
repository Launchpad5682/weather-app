import React, { useState } from "react";
import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export function TempForm({ temp, setTemp }) {
  const endpoint = "https://api.openweathermap.org/data/2.5/weather?";
  const access_key = "&appid=ffab998f7678dc6ab184b50e7a1d5d18";

  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    let url = endpoint + "q=" + city + access_key + "&units=metric";
    console.log(url);
    console.log(temp);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main.temp, data.name, data.sys.country);
        setTemp({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
        });
        setCity("");
      })
      .catch((err) => console.log(err));
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
