import React, {Component} from 'react';
import GameTypeBtn from '../../components/GameTypeBtn/GameTypeBtn';
import './SidebarHeader.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    gameType, 
    getGameDate, 
    clearGameDate,
    setCurrentGameDate,
    getPlayers,
    clearGamePlayers } from '../../actions';

class SidebarHeader extends Component {

    componentDidUpdate = (prevProps) => {
        
        if ( this.props.gameDate !== undefined ) {
            const currentGameDate = this.props.currentGameDate ? this.props.currentGameDate : this.props.gameDate[0];
            const gameType = this.props.gameTypeSelected.replace(/\s/g, '');
            
            if ( prevProps.currentGameDate !== this.props.currentGameDate) {
                this.props.clearGamePlayers();
                this.props.getPlayers(gameType, currentGameDate);
            }
        }
        
    }

    setActiveGrid = (el) => {
        this.props.gameType(el);
        this.props.getGameDate(el);
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
                                onClick={() => this.setActiveGrid(el)}
                                isFetching={this.props.isFetching} />
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
        gameTypes: state.grids.gameTypes,
        currentGameDate: state.grids.currentSelectedGameDate,
        gameDate: state.grids.gameDate,
        players: state.grids.players,
        isFetching: state.grids.players && state.grids.players.length > 0 ? false : true
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        gameType,
        getGameDate,
        clearGameDate,
        setCurrentGameDate,
        getPlayers,
        clearGamePlayers
    }, dispatch);
    // return {
    //     setCurrentGrid: (gameTypeSelected) => {
    //         dispatch( gameType(gameTypeSelected) );
    //     }
    // }
};

SidebarHeader.propTypes = {
    gameTypeSelected: PropTypes.string.isRequired,
    gameTypes: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);