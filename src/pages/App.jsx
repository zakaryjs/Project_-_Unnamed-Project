import '../styles/App.css';
import header from '../components/header';
import SearchBar from '../components/searchBar';
import WeatherData from '../components/weatherData'
import ForecastData from '../components/forecastData';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';


function App() {
  // declares variable weatherLocation with blank state
  const [weatherLocation, setWeatherLocation] = useState("")
  
  // function that updates the state of weatherLocation whenever the search bar is submitted
  const handleFormSubmit = (data) => {
    setWeatherLocation(data)
  }

  // declares shown with a state of false
  const [shown, setShown] = useState(false)

  // function to toggle whether the shown state is true or false - if shown is true, show the button that allows users to toggle whether
  // the forecast data is shown
  const forecastToggle = () => {
    setShown((shown) => !shown)
  }

  const [loading, setLoading] = useState(false)


  // declares date variables to get browsers current time and convert it into readable format
  let date = new Date()
  let localisedDate = date.toLocaleTimeString()

  return (
    // conditional rendering: is the browser time past 6pm? If so, show the 'nightTime' background
    <div className=
    {(localisedDate.charAt(0) > 1 || localisedDate.charAt(1) > 7) ? 'nightTime' : 'dayTime'}>
      {/* basic header component */}
      {header}
      {/* search bar component responsible for getting the location the user is searching for */}
      <SearchBar onFormSubmit={handleFormSubmit} setLoading={setLoading} setShown={setShown} />
      {loading && <ClipLoader id='loader' color="#ffffff" />}
      {/* div to display the fetched weather data */}
      {weatherLocation && !loading && <WeatherData weatherLocation={weatherLocation} />}
      {/* button to toggle whether forecast data is shown */}
      {weatherLocation && !loading && <button id='toggleButton' onClick={forecastToggle}>Toggle Forecast</button>}
      {/* div to display the fetched forecast data */}
      {shown && weatherLocation && !loading && <ForecastData weatherLocation={weatherLocation} />}
    </div>
  );
}

export default App;
