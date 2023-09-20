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

  const [shown, setShown] = useState(false)

  const forecastToggle = () => {
    setShown((shown) => !shown)
  }

  let date = new Date()
  let localisedDate = date.toLocaleTimeString()

  return (
    <div className=
    {(localisedDate.charAt(1) > 7 || localisedDate.charAt(0) > 1) ? 'nightTime' : 'dayTime'}>
      {/* basic header component */}
      {header}
      {/* search bar component responsible for getting the location the user is searching for */}
      <SearchBar onFormSubmit={handleFormSubmit}/>
      {/* div to display the fetched weather data */}
      {weatherLocation && <WeatherData weatherLocation={weatherLocation} />}
      {weatherLocation && <button id='toggleButton' onClick={forecastToggle}>Toggle Forecast</button>}
      {/* div to display the fetched forecast data */}
      {shown && weatherLocation && <ForecastData weatherLocation={weatherLocation} />}
      
    </div>
  );
}

export default App;
