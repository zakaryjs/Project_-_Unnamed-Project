import '../styles/App.css';
import header from '../components/header';
import SearchBar from '../components/searchBar';
import WeatherData from '../components/weatherData'


function App() {
  return (
    <div className="App">
      {header}
      <SearchBar />
      <WeatherData />
    </div>
  );
}

export default App;
