import '../styles/App.css';
import header from './header';
import SearchBar from './searchBar';
import WeatherData from './weatherData'
import ForecastData from './forecastData';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

export default function WeatherParent() {
  // declares variable weatherLocation with blank state for whether or not there is weather data available
  const [weatherLocation, setWeatherLocation] = useState("")
  
  // function that updates the state of weatherLocation whenever the search bar is submitted
  const handleFormSubmit = (data) => {
    setWeatherLocation(data)
  }

  // declares shown with a state of false for whether or not the toggle forecast button should be displayed
  const [shown, setShown] = useState(false)

  // function to toggle whether the shown state is true or false - if shown is true, show the button that allows users to toggle whether
  // the forecast data is shown
  const forecastToggle = () => {
    setShown((shown) => !shown)
    console.log(localisedDate)
  }

  // declares loading with a state of false for whether or not data is currently being fetched
  const [loading, setLoading] = useState(false)

  // declare localisedDate to get browsers current time and convert it into readable format
  let localisedDate = new Date().toLocaleTimeString('en-us', {hour12: false})

  return (
    // example localisedDate: 13:36:23
    // if the first digit of the date is greater than one, 2 - e.g: 20,21,22,23 - that means it is past 7pm
    // if the second digit is greater than 7, that means it is 6pm
    // these two conditions check to see whether it is 6pm or later, and if it is, 
    // show the nightTime background instead of the day time background
    <div className=
    {((localisedDate.charAt(0) > 0 && localisedDate.charAt(1) > 7 ) || localisedDate.charAt(0) > 1) ? 'nightTime' : 'dayTime'}>
      {/* basic header component */}
      {header}
      {/* search bar component responsible for getting the location the user is searching for */}
      <SearchBar onFormSubmit={handleFormSubmit} setLoading={setLoading} setShown={setShown} />
      {loading && <ClipLoader id='loader' color="#ffffff" />}
      {/* component to display the fetched weather data - only rendered if there is data available and there is no loading */}
      {weatherLocation && !loading && <WeatherData weatherLocation={weatherLocation} />}
      {/* button to toggle whether forecast data is shown - only rendered if there is data available and there is no loading */}
      {weatherLocation && !loading && <button id='toggleButton' onClick={forecastToggle}>Toggle Forecast</button>}
      {/* component to display the fetched forecast data - only rendered if there is data available, there is no loading, and the button has been toggled */}
      {shown && weatherLocation && !loading && <ForecastData weatherLocation={weatherLocation} />}
    </div>
  );
}