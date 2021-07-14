import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TempContext } from "../context/tempContext";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.accent} 70%)`,
    color: theme.palette.primary.textColor,
    display: "flex",
    height: "400px",
    width: "250px",
    margin: "100px auto",
    borderRadius: "5%",
  },
  title: {
    color: theme.palette.primary.textColor,
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
            <Typography variant="h5">Enter a valid City</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <img
          src={`https://openweathermap.org/img/wn/${tempData.icon}@2x.png`}
        />
        <Typography className={classes.title} variant="h2">
          {tempData.temp}&#8451;
        </Typography>
        <Typography variant="h7">{tempData.weather}</Typography>
        <Typography variant="h5">
          {tempData.city}, {tempData.country}
        </Typography>
        <Typography variant="h7">
          Feels like {tempData.feels_like}&#8451;
        </Typography>
      </CardContent>
    </Card>
  );
}
