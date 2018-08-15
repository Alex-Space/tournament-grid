import React from 'react';
import './DateSelector.css';

const DateSelector = (props) => {
    return (
        <div className='date-selector-container'>
            <select name='date-select' onChange={props.onChange}>
                {props.gameDate ? props.gameDate.map((date, index) => {
                    return (
                        <option value={date} key={index}>{date}</option>
                    )
                }) : null}
            </select>
        </div>
    );
}

export default DateSelector;