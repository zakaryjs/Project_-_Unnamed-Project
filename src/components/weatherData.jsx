import { useEffect, useState } from "react";


function WeatherData() {
    const [data, setData] = useState(true);

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        let url = "http://api.weatherapi.com/v1/current.json?key=&q=melbourne&aqi=no"
        let response = await fetch(url)
        const data = await response.json()
        setData(data)
        console.log(data)
    }
    return (
        <div>
        <p>Testing Fetch</p>
        {<h1>{data?.location?.country}, {data?.location?.name}</h1>}
        {<p>{data?.location?.localtime}</p>}
        {<p>{data?.current?.temp_c} degrees Celcius!</p>}
        </div>
    )
}

export default WeatherData