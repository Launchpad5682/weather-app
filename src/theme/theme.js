import { createTheme, makeStyles } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    padding: "100px 0",
    height: "100%",
  },
}));
