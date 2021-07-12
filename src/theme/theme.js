import { createTheme, makeStyles } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00796B",
    },
    secondary: {
      main: "#4CAF50",
    },
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "0 30px",
    height: "90vh",
  },
  footer: {
    background: "green",
    height: "10vh",
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "0 30px",
    height: "90vh",
  },
  footer: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "10vh",
  },
}));
