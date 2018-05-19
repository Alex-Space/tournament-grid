import React from 'react';

const gameTypeBtn = (props) => {
    const gameType = props.gameType;
    return (
        <div onClick={props.setClassActive} className={props.isActive ? 'active' : ''}>
            {gameType}
        </div>
    )
};

export default gameTypeBtn;