import axios from 'axios';

const Axios = axios.create({
    withCredentials: false
});

const BASE_URL = 'http://api.openweathermap.org/data/2.5/'

export default {
    getWeatherByLocation,
    getForecastByLocation,
    formatIconName,
    filterForecast
}

async function getWeatherByLocation(location, units) {

    try {
        const { data } = await Axios.get(`${BASE_URL}weather?q=${location}&units=${units}&appid=${process.env.REACT_APP_KEY}`);
        return data;
    } catch (err) {
        throw err.response.data.message;
    }
}

async function getForecastByLocation(location, units) {
    try {
        const { data } = await Axios.get(`${BASE_URL}forecast?q=${location}&units=${units}&appid=${process.env.REACT_APP_KEY}`);
        return data;
    } catch (err) {
        throw err.response.data.message;
    }
}

function filterForecast(forecast, filter = '12:00') {

    const forecastArray = forecast.list;
    const filteredForecast = forecastArray.filter(element => element.dt_txt.substring(11, 16) === filter);
    return filteredForecast;
}

function formatIconName(weather) {

    const main = weather.weather[0].main;
    const iconId = weather.weather[0].icon;

    switch (main) {
        case 'Clear':
            return (iconId.includes('d')) ? 'clear-day' : 'clear-night';
        case 'Clouds':
            return (iconId.includes('d')) ? 'clouds-day' : 'clouds-night';
        case 'Sand':
            return 'dust';
        case 'Mist':
            return 'fog';
        case 'Ash':
            return 'smoke';
        default:
            return main.toLowerCase();
    }
}