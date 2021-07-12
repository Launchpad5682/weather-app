import { useState, createContext } from "react";
import { TempContext } from "./tempContext";

export const CoordinateContext = createContext();

export const CoordinateProvider = (props) => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  return (
    <CoordinateContext.Provider value={{ coordinates, setCoordinates }}>
      {props.children}
    </CoordinateContext.Provider>
  );
};
