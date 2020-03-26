import React, { useState } from 'react';

import WeatherDetails from '../cmps/WeatherDetails';
import SearchBar from '../cmps/SearchBar';

import WeatherService from '../services/WeatherService';

import logo from '../assets/img/logo-black.png';

export default function Home() {

    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [filteredForecast, setFilteredForecast] = useState(null);
    const [filter, setFilter] = useState('12:00');
    const [units, setUnits] = useState('metric');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const onSetLocation = (location) => {
        if (error) setError(false);
        (location) ? setLocation(location) : setWeather(null);
        if (!location) return;
        getWeather(location, units);
        getForecast(location, units);
    }

    const getWeather = async (location, units) => {
        try {
            const weather = await WeatherService.getWeatherByLocation(location, units);
            setWeather(weather);
        } catch (err) {
            setMessage(err);
            setError(true);
        }
    }

    const getForecast = async (location, units) => {
        try {
            const forecast = await WeatherService.getForecastByLocation(location, units);
            setForecast(forecast);
            setFilteredForecast(WeatherService.filterForecast(forecast, filter));
        } catch (err) {
            setMessage(err);
            setError(true);
        }
    }

    const filterForecast = (filter) => {
        setFilter(filter);
        setFilteredForecast(WeatherService.filterForecast(forecast, filter));
    }

    const unitsSelection = (units) => {
        setUnits(units);
        if (location) {
            getWeather(location, units);
            getForecast(location, units);
        } else {
            return;
        }
    }

    return (
        <div className="flex column full main-container home">
            <SearchBar onSetLocation={onSetLocation} unitsSelection={unitsSelection} />
            {weather && !error ? <WeatherDetails location={location} weather={weather} forecast={filteredForecast} filterForecast={filterForecast} />
                : <div className="flex column center align-center logo-container">
                    <img src={logo} alt="" />
                    {error && <div className="capitalize"><h2>{message}</h2></div>}
                </div>}
        </div>
    )
}