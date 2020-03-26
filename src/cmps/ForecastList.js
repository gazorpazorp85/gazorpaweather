import React from 'react';

import ForecastPreview from './ForecastPreview';

export default function ForecastList(props) {

    const forecast = props.forecast;

    return (
        <div className="flex full forecast-list-container">
            {forecast.map(element => {
                return <ForecastPreview key={element.dt} forecast={element} />
            })}
        </div>
    )
}