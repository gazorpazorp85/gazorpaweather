import React, { useState } from 'react';

export default function SearchBar(props) {

    const [location, setLocation] = useState('');
    const [selected, setSelected] = useState('c');

    const inputChange = (ev) => {
        let { value } = ev.target;
        setLocation(value);
    }

    const checkKey = (ev) => {
        if (ev.key === 'Enter') onSetLocation(ev);
    }

    const onSetLocation = (ev) => {
        ev.preventDefault();
        props.onSetLocation(location);
    }

    const selectionHandler = (selection) => {
        setSelected(selection);
        (selection === 'c') ? props.unitsSelection('metric') : props.unitsSelection('imperial');
    }

    return (
        <div className="flex column search-bar-container">
            <div className="flex search-bar-subcontainer">
                <div className="flex search-input-container">
                    <input id="search-bar" type="text" placeholder="Enter a city" value={location}
                        onChange={inputChange} onKeyPress={checkKey} name="location" />
                    <div className="flex full center align-center uppercase pointer set-button" onClick={onSetLocation}>
                        <div>set</div>
                    </div>
                </div>
                <div className="flex units-container">
                    <div className={`flex center align-center pointer capitalize unit-container ${(selected === 'c' ? 'selected' : '')}`}
                        onClick={() => selectionHandler('c')}>
                        <div>
                            &#176;c
                        </div>
                    </div>
                    <div className={`flex center align-center pointer capitalize unit-container ${(selected === 'f' ? 'selected' : '')}`}
                        onClick={() => selectionHandler('f')}>
                        <div>
                            &#176;f
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}