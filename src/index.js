import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TempProvider } from "./context/tempContext.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme.js";
import { CoordinateProvider } from "./context/coordinateContext";

ReactDOM.render(
  // theme={theme}
  <ThemeProvider theme={theme}>
    <TempProvider>
      <CoordinateProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CoordinateProvider>
    </TempProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
