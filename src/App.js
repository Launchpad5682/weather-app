import { TempCard } from "./components/card.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, useStyles } from "./theme/theme.js";
import { Footer } from "./components/footer.js";
import { TempForm } from "./components/form.js";
import { useState, useEffect } from "react";
import { getLocation } from "./helper/geoLocation.js";
import { fetchWeatherDataByCoordinates } from "./helper/fetchWeatherData.js";

/*
Creating the state in the parent component and passing 
it down the build tree
*/

function App() {
  const classes = useStyles();
  //let lat,
  //long = getLocation(fetchWeatherDataByCoordinates);
  //const [tempData, setTempData] = useContext(TempContext);
  const [tempData, setTempData] = useState({
    temp: null,
    city: null,
    country: null,
  });
  const [coordinates, setCoordinates] = useState();
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
    const data = await fetchWeatherDataByCoordinates(
      coordinates.latitude,
      coordinates.longitude
    );

    setTempData(data);

    //console.log("test at success " + data);

    //return { latitude: crd.latitude, longitude: crd.longitude }
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
    // setCoordinates({})
  }, []);

  if (coordinates) {
    console.log(coordinates);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TempForm temp={tempData} setTemp={setTempData} />
        <TempCard temp={tempData} />
      </div>
      <Footer className={classes.footer} />
    </ThemeProvider>
  );
}

export default App;
