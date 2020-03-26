import React from 'react';
import Moment from 'moment';

import ForecastList from './ForecastList';
import ForecastFilter from './ForecastFilter';

import WeatherService from '../services/WeatherService';

import sunriseIcon from '../assets/icons/sunrise.png';
import sunsetIcon from '../assets/icons/sunset.png';

export default function WeatherDetails(props) {

    const weather = props.weather;
    const forecast = props.forecast;
    const iconName = WeatherService.formatIconName(weather);
    const icon = require(`../assets/icons/${iconName}.png`);

    return (
        <div className="flex column weather-details-container">
            <div className="flex weather-details">
                <div className="icon-container">
                    <img src={icon} alt="" />
                </div>
                <div>
                    <div className="temperature-container">
                        <h1>{Math.round(weather.main.temp)}&#176;</h1>
                        <small className="capitalize">feels like {Math.round(weather.main.feels_like)}&#176;</small>
                    </div>
                    <div className="weather-condition-container">
                        <h2>{weather.weather[0].main}</h2>
                        <div className="capitalize">{weather.weather[0].description}</div>
                    </div>
                    <div>
                        <div className="flex sun-container">
                            <div className="sun-icon-container">
                                <img src={sunriseIcon} alt="sunrise" />
                            </div>
                            <div className="sun-text-container">
                                {Moment(weather.sys.sunrise * 1000).format("HH:mm")}
                            </div>
                            <div className="sun-icon-container">
                                <img src={sunsetIcon} alt="sunset" />
                            </div>
                            <div className="sun-text-container">
                                {Moment(weather.sys.sunset * 1000).format("HH:mm")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex full column">
                <div className="flex center align-center">
                    <h2 className="capitalize">{props.location}'s forecast</h2>
                    <ForecastFilter filterForecast={props.filterForecast}/>
                </div>
                {forecast && <ForecastList forecast={forecast} />}
            </div>
        </div>
    )
}
