import React from 'react';
import Moment from 'moment';

import WeatherService from '../services/WeatherService';

export default function ForecastPreview(props) {

    const forecast = props.forecast;
    const iconName = WeatherService.formatIconName(forecast);
    const icon = require(`../assets/icons/${iconName}.png`);

    return (
        <div className="flex column forecast-preview-container">
            <div className="forecast-icon-container">
                <img src={icon} alt="" />
            </div>
            <div>
                {Math.round(forecast.main.temp)}&#176;
            </div>
            <div>
                {forecast.weather[0].main}
            </div>
            <div>
                {Moment(forecast.dt_txt).format("ddd MMM DD")}
            </div>
        </div>
    )

}