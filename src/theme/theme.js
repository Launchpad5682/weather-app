import { createTheme } from "@material-ui/core";
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
