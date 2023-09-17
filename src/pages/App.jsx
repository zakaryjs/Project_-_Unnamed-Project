import '../styles/App.css';
import header from '../components/header';
import SearchBar from '../components/searchBar';
import WeatherData from '../components/weatherData'
import ForecastData from '../components/forecastData';
import { useState } from 'react';


function App() {
  // declares variable weatherLocation with blank state
  const [weatherLocation, setWeatherLocation] = useState("")
  
  // function that updates the state of weatherLocation whenever the search bar is submitted
  const handleFormSubmit = (data) => {
    setWeatherLocation(data)
  }

  return (
    <div className="App">
      {/* basic header component */}
      {header}
      {/* search bar component responsible for getting the location the user is searching for */}
      <SearchBar onFormSubmit={handleFormSubmit}/>
      {/* div to display the fetched weather data */}
      {weatherLocation && <WeatherData weatherLocation={weatherLocation} />}
      {/* div to display the fetched forecast data */}
      {weatherLocation && <ForecastData weatherLocation={weatherLocation} />}
    </div>
  );
}

export default App;
