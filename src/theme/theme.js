import { createTheme, makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#673AB7",
      accent: "#03A9F4",
      darkPrimary: "#512DA8",
      lightPrimary: "#D1C4E9",
      textColor: "#FFFFFF",
      primaryText: "#212121",
      secondaryText: "#757575",
      dividerColor: "#BDBDBD",
    },
    secondary: {
      main: "#FF5722",
      accent: "#FFC107",
      darkPrimary: "#E64A19",
      lightPrimary: "#FFCCBC",
      textColor: "#FFFFFF",
      primaryText: "#212121",
      secondaryText: "#757575",
      dividerColor: "#BDBDBD",
    },
  },
});
