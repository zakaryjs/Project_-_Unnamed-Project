
import { useEffect, useState } from "react";


function ForecastData() {
    const [data, setData] = useState(true);

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        let url = "http://api.weatherapi.com/v1/forecast.json?key=&q=perth&days=3&aqi=no&alerts=no"
        let response = await fetch (url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    return (
        <div className="forecastDataDiv">
            <h2>Forecast</h2>
            <p>Today:</p>
            <p>Predicted condition: {data?.forecast?.forecastday?.[0]?.day?.condition?.text}</p>
            <img src={data?.forecast?.forecastday?.[0]?.day?.condition?.icon} alt="forecast condition icon"></img>
            {<p>{data?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}% chance of rain.</p>}
            {<p>Maximum temperature: {data?.forecast?.forecastday?.[0]?.day?.maxtemp_c} degrees Celcius</p>}
            {<p>Minimum temperature: {data?.forecast?.forecastday?.[0]?.day?.mintemp_c} degrees Celcius</p>}
            {/* {<p>{data?.forecast?.forecastday?.[0]?.date}</p>} */}
        </div>
    )
}

export default ForecastData