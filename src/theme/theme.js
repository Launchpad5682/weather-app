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
    // secondary: {
    //   main: green[500],
    // },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "100px 0",
    height: "100%",
  },
}));
