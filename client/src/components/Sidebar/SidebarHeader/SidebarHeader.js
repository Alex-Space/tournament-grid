import React, {Component} from 'react';
// import FontAwesome from 'react-fontawesome';
import './SidebarHeader.css';
import GameTypeBtn from './GameTypeBtn/GameTypeBtn';

class SidebarHeader extends Component {

    state = {
        gameTypes: [ '1 vs 1', '2 vs 2', '3 vs 3', '5 vs 5'],
        gameTypeSelected: '1 vs 1'
    };

    setActiveGrid = (el) => {
        this.setState({gameTypeSelected: el});
    }

    render() {
        const newState = {...this.state};
        return (
            <header className='sidebar-header'>
                <div className='game-type-container'>

                    {newState.gameTypes.map(( el, index ) => {
                        return (
                            <GameTypeBtn 
                                key={index} 
                                gameType={el} 
                                isActive={el === newState.gameTypeSelected ? true : false }
                                onClick={() => this.setActiveGrid(el)} />
                        )
                    })}

                </div>
                <h3><span className='image'></span>Players:</h3>
            </header>
        );
    };
}

export default SidebarHeader;