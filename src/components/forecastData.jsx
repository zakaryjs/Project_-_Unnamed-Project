
function ForecastData({ weatherLocation }) {

    return (
        <div className="forecastDataDiv">
            <h2>Forecast</h2>
            <div>
                {weatherLocation.forecast.forecastday.map(day => (
                    <div key={day.date}>
                    <h3><u>{day.date}</u></h3>
                    <img src={day.day.condition.icon} alt="forecast icon"></img>
                    <p>Sunrise: {day.astro.sunrise}</p>
                    <p>Sunset: {day.astro.sunset}</p>
                    <p>Predicted condition: {day.day.condition.text}</p>
                    <p>{day.day.daily_chance_of_rain}% chance of rain.</p>
                    <p>Maximum temperature: {day.day.maxtemp_c} degrees Celsius</p>
                    <p>Maximum temperature: {day.day.mintemp_c} degrees Celsius</p>
                    </div>
                ))}
            </div>
            
            
        </div>
    )
}

export default ForecastData