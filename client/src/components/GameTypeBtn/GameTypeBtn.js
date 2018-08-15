import React from 'react';
import './GameTypeBtn.css';

const gameTypeBtn = (props) => {
    const isActive = props.isActive ? 'active' : '';
    const classes = `game-type-btn ${isActive}`;
    const clickable = props.isFetching ? 'disabled' : '';

    return (
        <button onClick={props.onClick} className={classes} disabled={clickable}>
            {props.gameType}
        </button>
    )
};

export default gameTypeBtn;