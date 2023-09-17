
function ForecastData({ weatherLocation }) {

    return (
        <div className="forecastDataDiv">
            <h2>Forecast</h2>
            <p>Today:</p>
            {<p>Sunrise: {weatherLocation?.forecast?.forecastday?.[0]?.astro?.sunrise} </p>}
            {<p>Sunset: {weatherLocation?.forecast?.forecastday?.[0]?.astro?.sunset} </p>}
            <p>Predicted condition: {weatherLocation?.forecast?.forecastday?.[0]?.day?.condition?.text}</p>
            <img src={weatherLocation?.forecast?.forecastday?.[0]?.day?.condition?.icon} alt="forecast condition icon"></img>
            {<p>{weatherLocation?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}% chance of rain.</p>}
            {<p>Maximum temperature: {weatherLocation?.forecast?.forecastday?.[0]?.day?.maxtemp_c} degrees Celsius</p>}
            {<p>Minimum temperature: {weatherLocation?.forecast?.forecastday?.[0]?.day?.mintemp_c} degrees Celsius</p>}
            {/* add drop down div for hourly data */}
            {/* also add conditional to only show data for after the current time */}
            {/* data will include temp, chance of rain */}
        </div>
    )
}

export default ForecastData