import React from 'react';
import './GeneralBtn.css';

export default (props) => (
    <div>
        <button className="general-btn">{props.children} {props.text}</button>
    </div>
);