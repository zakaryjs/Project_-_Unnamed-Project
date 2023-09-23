import '../styles/weatherData.css'

export default function WeatherData({ weatherLocation }) {

    try {
        return (
            // conditional rendering to determine which background should be displayed:
            // this is dependent on the weather condition code, which is a part of the API response
            <div className=
            {weatherLocation.current.condition.code === 1063 ? 'patchyRain':
            weatherLocation.current.condition.code === 1000 ? 'clear':
            weatherLocation.current.condition.code === 1003 || 1006 ? 'partlyCloudy':
            weatherLocation.current.condition.code === 1183 || 1150 ? 'lightRain':
            'weatherDataDiv'}>
            {<h1 className='dataHeader'>{weatherLocation?.location?.country}, {weatherLocation?.location?.name}</h1>}
            {<h2 className='dataHeader'>{weatherLocation?.location?.region}</h2>}
            <h3 className='dataHeader'>Right Now:</h3>
            <img id='weatherLocationDivImage' src={weatherLocation?.current?.condition?.icon} alt="weatherLocation condition icon"></img>
            <p>Current condition: {weatherLocation?.current?.condition?.text}</p>
            <p>UV index of: {weatherLocation?.current?.uv}</p>
            {<p>It is currently {weatherLocation?.location?.localtime}</p>}
            {<p>It is currently {weatherLocation?.current?.temp_c}°C</p>}
            </div>
        )
    } catch (error) {
        return (
            <div>
                {<p>There has been an error.</p>}
                {<p>This could include an invalid location name, or misspelling.</p>}
                {<p>Please try again.</p>}
                {<p>{error.message}</p>}
            </div>
        )
    }
}