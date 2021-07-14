import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TempContext } from "../context/tempContext";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.accent} 70%)`,
    color: theme.palette.primary.textColor,
    height: "400px",
    width: "250px",
    margin: "100px auto",
    borderRadius: "5%",
  },
}));

export function TempCard() {
  const { tempData, setTempData } = useContext(TempContext);
  const classes = useStyles();

  if (tempData.loading === true) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CircularProgress />
            <Typography>Enter a valid City</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {tempData.temp}&#8451;
        </Typography>
        <Typography variant="h5" component="h2">
          {tempData.city}, {tempData.country}
        </Typography>
      </CardContent>
    </Card>
  );
}
