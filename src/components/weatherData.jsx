import '../styles/weatherData.css'
import { useEffect, useState } from "react";


function WeatherData() {
    const [data, setData] = useState(true);

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        let url = "http://api.weatherapi.com/v1/current.json?key=&q=perth&aqi=no"
        let response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    return (
        <div className="weatherDataDiv">
        {<h1>{data?.location?.country}, {data?.location?.name}</h1>}
        {<h2>{data?.location?.region}</h2>}
        <img src={data?.current?.condition?.icon} alt="weather condition icon"></img>
        <p>It is currently {data?.current?.condition?.text}, with a UV index of {data?.current?.uv}</p>
        {<p>It is currently {data?.location?.localtime}</p>}
        {<p>It is currently {data?.current?.temp_c} degrees Celcius.</p>}
        {<p></p>}
        </div>
    )
}

export default WeatherData