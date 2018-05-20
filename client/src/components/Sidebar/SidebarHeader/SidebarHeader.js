import React, {Component} from 'react';
import './SidebarHeader.css';
import GameTypeBtn from './GameTypeBtn/GameTypeBtn';

import { connect } from 'react-redux';
import { gameType } from '../../../actions';

class SidebarHeader extends Component {

    setActiveGrid = (el) => {
        this.props.setCurrentGrid(el);
    }

    render() {
        return (
            <header className='sidebar-header'>
                <div className='game-type-container'>

                    {this.props.gameTypes.map(( el, index ) => {
                        return (
                            <GameTypeBtn 
                                key={index} 
                                gameType={el} 
                                isActive={el === this.props.gameTypeSelected ? true : false }
                                onClick={() => this.setActiveGrid(el)} />
                        )
                    })}

                </div>
                <h3><span className='image'></span>Players:</h3>
            </header>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        gameTypeSelected: state.grids.gameTypeSelected,
        gameTypes: state.grids.gameTypes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentGrid: (gameTypeSelected) => {
            dispatch( gameType(gameTypeSelected) );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);