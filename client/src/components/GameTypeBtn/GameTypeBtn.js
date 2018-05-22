import React from 'react';
import './GameTypeBtn.css';

const gameTypeBtn = (props) => {
    const isActive = props.isActive ? 'active' : '';
    const classes = `${isActive} game-type-btn`;
    
    return (
        <div onClick={props.onClick} className={classes}>
            {props.gameType}
        </div>
    )
};

export default gameTypeBtn;