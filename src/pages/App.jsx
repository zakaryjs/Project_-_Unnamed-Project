import '../styles/App.css';
import header from '../components/header';
import SearchBar from '../components/searchBar';
import WeatherData from '../components/weatherData'
import ForecastData from '../components/forecastData';


function App() {
  return (
    <div className="App">
      {header}
      <SearchBar />
      <WeatherData />
      <ForecastData />
    </div>
  );
}

export default App;
