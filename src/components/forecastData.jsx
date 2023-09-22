import '../styles/forecastData.css'
function ForecastData({ weatherLocation }) {

    try {
        return (
            // renders forecastDataDiv
            <div className="forecastDataDiv">
                <h2 id='forecastH2'>Forecast</h2>
                <div>
                    <div>
                        {/* maps over the 3 days in the API response (today, tomorrow, day after tomorrow) to show the specified details */}
                    {weatherLocation.forecast.forecastday.map(day => (
                        <div key={day.date}>
                        <h3><u>{day.date}</u></h3>
                        <img src={day.day.condition.icon} alt="forecast icon"></img>
                        <p>Sunrise: {day.astro.sunrise}</p>
                        <p>Sunset: {day.astro.sunset}</p>
                        <p>Predicted condition: <br />{day.day.condition.text}</p>
                        <p>{day.day.daily_chance_of_rain}% chance of rain.</p>
                        <p>Maximum temperature: {day.day.maxtemp_c}°C</p>
                        <p>Minimum temperature: {day.day.mintemp_c}°C</p>
                        </div>
                    ))}
                    </div>
                </div>
                
                
            </div>
        )
    }
    catch (error) {
        console.log(error)
        return (
            <div>
                {<p>No forecast data available.</p>}
            </div>
        )
    }
    
}

export default ForecastData