import { createContext, useState } from "react";

export const TempContext = createContext();

export const TempProvider = (props) => {
  const [temp, setTemp] = useState();

  return (
    <TempContext.Provider value={temp}>{props.children}</TempContext.Provider>
  );
};
