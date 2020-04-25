import React, { useState } from 'react';

export default function ForecastFilter(props) {

    const [selected, setSelected] = useState('12:00');
    const [isMenuShown, setIsMenuShown] = useState(false);
    const filterHours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    const toggleMenu = () => {
        setIsMenuShown(!isMenuShown);
    }

    const clickHandler = (selectedText) => {
        setSelected(selectedText);
        setIsMenuShown(!isMenuShown);
        props.filterForecast(selectedText)
    }

    return (
        <div className="forecast-filter-container">
            <div className="pointer forecast-filter-select-container" onClick={toggleMenu}>
                {selected}
                {isMenuShown && <div className="forecast-filter">
                    {filterHours.map(hour => {
                        return <div key={hour} className="filter-option" onClick={() => clickHandler(hour)}>{hour}</div>
                    })}
                </div>}
            </div>
        </div>
    )
}