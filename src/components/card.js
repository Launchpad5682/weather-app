import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 200,
    height: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 10px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 34,
  },
  pos: {
    marginBottom: 120,
  },
});

export function TempCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          27&#8451;
        </Typography>
        <Typography variant="h5" component="h2">
          City Name
        </Typography>
      </CardContent>
    </Card>
  );
}
