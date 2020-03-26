import React, { useState } from 'react';

export default function ForecastFilter(props) {

    const [selected, setSelected] = useState('12:00');
    const [isMenuShown, setIsMenuShown] = useState(false);


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
                    <div className="filter-option" onClick={() => clickHandler('00:00')}>00:00</div>
                    <div className="filter-option" onClick={() => clickHandler('03:00')}>03:00</div>
                    <div className="filter-option" onClick={() => clickHandler('06:00')}>06:00</div>
                    <div className="filter-option" onClick={() => clickHandler('09:00')}>09:00</div>
                    <div className="filter-option" onClick={() => clickHandler('12:00')}>12:00</div>
                    <div className="filter-option" onClick={() => clickHandler('15:00')}>15:00</div>
                    <div className="filter-option" onClick={() => clickHandler('18:00')}>18:00</div>
                    <div className="filter-option" onClick={() => clickHandler('21:00')}>21:00</div>
                </div>}
            </div>
        </div>
    )
}