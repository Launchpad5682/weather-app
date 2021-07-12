import { createContext, useState } from "react";
import { fetchWeatherDataByCoordinates } from "../helper/fetchWeatherData";
import { getLocation } from "../helper/geoLocation";

export const TempContext = createContext();

export const TempProvider = (props) => {
  const [tempData, setTempData] = useState({
    temp: null,
    city: null,
    country: null,
  });

  return (
    <TempContext.Provider value={{ tempData, setTempData }}>
      {props.children}
    </TempContext.Provider>
  );
};
