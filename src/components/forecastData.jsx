
import { useEffect, useState } from "react";


function ForecastData() {
    const [data, setData] = useState(true);

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=&q=perth&days=3&aqi=no&alerts=no`
        let response = await fetch (url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    return (
        <div className="forecastDataDiv">
            <h2>Forecast</h2>
            <p>Today:</p>
            {<p>Sunrise: {data?.forecast?.forecastday?.[0]?.astro?.sunrise} </p>}
            {<p>Sunset: {data?.forecast?.forecastday?.[0]?.astro?.sunset} </p>}
            <p>Predicted condition: {data?.forecast?.forecastday?.[0]?.day?.condition?.text}</p>
            <img src={data?.forecast?.forecastday?.[0]?.day?.condition?.icon} alt="forecast condition icon"></img>
            {<p>{data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}% chance of rain.</p>}
            {<p>Maximum temperature: {data?.forecast?.forecastday?.[0]?.day?.maxtemp_c} degrees Celsius</p>}
            {<p>Minimum temperature: {data?.forecast?.forecastday?.[0]?.day?.mintemp_c} degrees Celsius</p>}
            {/* add drop down div for hourly data */}
            {/* also add conditional to only show data for after the current time */}
            {/* data will include temp, chance of rain */}
        </div>
    )
}

export default ForecastData