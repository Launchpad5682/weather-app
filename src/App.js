import { GoButton } from "./components/button.js";
import { TempCard } from "./components/card.js";
import { SearchBar } from "./components/search.js";
import { ThemeProvider } from "@material-ui/core/styles";
import { fetchWeatherDataByCoordinates } from "./helper/fetchWeatherData.js";
import { getLocation } from "./helper/geoLocation";
import { theme } from "./theme/theme.js";
import { Footer } from "./components/footer.js";

function App() {
  //let lat,
  //long = getLocation(fetchWeatherDataByCoordinates);

  return (
    <ThemeProvider theme={theme}>
      <div >
        <SearchBar />
        <GoButton />
        <TempCard />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
