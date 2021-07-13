import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { TempContext } from "../context/tempContext";

const useStyles = makeStyles({
  root: {
    background: "yellow",
    color: "green",
    height: "300px",
    width: "200px",
    margin: "100px auto",
  },
});

export function TempCard() {
  const { tempData, setTempData } = useContext(TempContext);
  const classes = useStyles();
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
