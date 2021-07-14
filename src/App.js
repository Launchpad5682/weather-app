import { TempCard } from "./components/card.js";
import { TempForm } from "./components/form.js";
import { useEffect, useContext } from "react";
import { fetchWeatherDataByCoordinates } from "./helper/fetchWeatherData.js";
import { TempContext } from "./context/tempContext.js";
import { CoordinateContext } from "./context/coordinateContext.js";
import { Box, makeStyles } from "@material-ui/core";

/*
Creating the state in the parent component and passing 
it down the build tree
*/

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.accent} 30%, ${theme.palette.primary.main} 90%)`,
    height: "100vh",
  },
}));

function App(props) {
  const classes = useStyles(props);
  const { tempData, setTempData } = useContext(TempContext);

  const { coordinates, setCoordinates } = useContext(CoordinateContext);
  // const { latitude, longitude } = getLocation();
  // console.log(latitude, longitude);

  var options = {
    enableHighAccuracy: true,
  };

  async function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    setCoordinates({ latitude: crd.latitude, longitude: crd.longitude });

    setTempData(
      await fetchWeatherDataByCoordinates(crd.latitude, crd.longitude)
    );
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  // re renders on the change, we can add objects when they're changed
  // then the useEffect() will re-run again
  useEffect(() => {
    const obj = getGeoLocation();
    console.log(obj);
  }, []);

  if (coordinates) {
    console.log(coordinates);
  }
  console.log("This is props " + props.theme);
  return (
    <Box className={classes.root}>
      <TempForm />
      <TempCard />
    </Box>
  );
}

export default App;
