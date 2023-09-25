import { useState } from 'react';
import '../styles/searchBar.css'

export default function SearchBar({ onFormSubmit, setLoading, setShown }) {
    const [weatherSearch, setWeatherSearch] = useState("")
    
    async function FormSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true)
            setShown(false)
            // let key = ''
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${weatherSearch}&days=3&aqi=no&alerts=no`)
            const data = await response.json()
            onFormSubmit(data)
            setLoading(false)
            event.target.reset()
        } catch {
            console.log("Invalid API key.")
            setLoading(false)
            event.target.reset()
        }
    }

    let handleLocationChange = (event) => {
        setWeatherSearch(event.target.value)
    }

    return (
        <div id='searchBar'>
            <form name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
            <input type="text" onChange={handleLocationChange} id="searchName" placeholder="Enter location here..." />
            </form>
        </div>    
        )
    }