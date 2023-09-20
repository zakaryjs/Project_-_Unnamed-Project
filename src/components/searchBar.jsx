import { useState } from 'react';
import '../styles/searchBar.css'
import { ClipLoader } from 'react-spinners';

export default function SearchBar({ onFormSubmit }) {
    const [weatherSearch, setWeatherSearch] = useState("")
    const [loading, setLoading] = useState(false)

    async function FormSubmit(event) {
        event.preventDefault();
        setLoading(true)
        let key = ''
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${weatherSearch}&days=3&aqi=no&alerts=no`)
        const data = await response.json()
        onFormSubmit(data)
        setLoading(false)
    }
    let handleLocationChange = (event) => {
        setWeatherSearch(event.target.value)
    }

    if (loading) {
        return (
            <ClipLoader id='loader' color="#ffffff" />
        )
        
    }

    return (
        <div id='searchBar'>
            <form name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
            <input type="text" onChange={handleLocationChange} id="searchName" placeholder="Enter location here..." />
            </form>
        </div>
        
    )
}