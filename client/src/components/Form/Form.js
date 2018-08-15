import React from 'react';
import './Form.css';

export default (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
};