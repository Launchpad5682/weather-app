import { TempCard } from "./components/card.js";
import { useStyles } from "./theme/theme.js";
import { Footer } from "./components/footer.js";
import { TempForm } from "./components/form.js";
import { useEffect, useContext } from "react";
import { fetchWeatherDataByCoordinates } from "./helper/fetchWeatherData.js";
import { TempContext } from "./context/tempContext.js";
import { CoordinateContext } from "./context/coordinateContext.js";

/*
Creating the state in the parent component and passing 
it down the build tree
*/

function App() {
  const classes = useStyles();
  //let lat,
  //long = getLocation(fetchWeatherDataByCoordinates);
  //const [tempData, setTempData] = useContext(TempContext);
  // const [tempData, setTempData] = useState({
  //   temp: null,
  //   city: null,
  //   country: null,
  // });
  const { tempData, setTempData } = useContext(TempContext);
  // const [coordinates, setCoordinates] = useState({
  //   latitude: null,
  //   longitude: null,
  // });

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

  return (
    <div>
      <div className={classes.root}>
        <TempForm temp={tempData} setTemp={setTempData} />
        <TempCard temp={tempData} />
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}

export default App;
