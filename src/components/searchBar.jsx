import { useState } from 'react';
import '../styles/searchBar.css'

export default function SearchBar({ onFormSubmit }) {
    const [weatherLocation, setWeatherLocation] = useState("")

    async function FormSubmit(event) {
        event.preventDefault();
        let key = ''
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${weatherLocation}&days=3&aqi=no&alerts=no`)
        const data = await response.json()
        onFormSubmit(data)
    }
    let handleLocationChange = (event) => {
        setWeatherLocation(event.target.value)
    }

    return (
        <form name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
        <input type="text" onChange={handleLocationChange} id="searchName" placeholder="Enter location here..." />
        </form>
    )
}