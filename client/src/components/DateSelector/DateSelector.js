import React from 'react';
import './DateSelector.css';

const DateSelector = () => {
    return (
        <div className='date-selector-container'>
            <select name='date-select'>
                <option value="01.01.2018">01.01.2018</option>
                <option value="01.02.2018">01.02.2018</option>
                <option value="01.03.2018">01.03.2018</option>
                <option value="15.03.2018">15.03.2018</option>
                <option value="01.05.2018">01.05.2018</option>
            </select>
        </div>
    );
}

export default DateSelector;