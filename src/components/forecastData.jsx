
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
            {<p>{data?.forecast?.forecastday?.[0]?.date}</p>}
        </div>
    )
}

export default ForecastData