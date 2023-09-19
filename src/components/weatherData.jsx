import '../styles/weatherData.css'

function WeatherData({ weatherLocation }) {

    return (
        <div className={weatherLocation.current.condition.text === 'Patchy rain possible' ? 'patchyRain':
        weatherLocation.current.condition.text === 'Clear' ? 'clear':
        weatherLocation.current.condition.text === 'Sunny' ? 'clear':
        weatherLocation.current.condition.text === 'Partly cloudy' ? 'partlyCloudy':
        'weatherDataDiv'}>
        {<h1 className='dataHeader'>{weatherLocation?.location?.country}, {weatherLocation?.location?.name}</h1>}
        {<h2 className='dataHeader'>{weatherLocation?.location?.region}</h2>}
        <h3 className='dataHeader'>Right Now:</h3>
        <img id='weatherLocationDivImage' src={weatherLocation?.current?.condition?.icon} alt="weatherLocation condition icon"></img>
        <p>Current condition: {weatherLocation?.current?.condition?.text}</p>
        <p>UV index of: {weatherLocation?.current?.uv}</p>
        {<p>It is currently {weatherLocation?.location?.localtime}</p>}
        {<p>It is currently {weatherLocation?.current?.temp_c}°C</p>}
        {<p></p>}
        </div>
    )
}

export default WeatherData