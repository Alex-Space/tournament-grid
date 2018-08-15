import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './TopBar.css';
import DateSelector from '../../components/DateSelector/DateSelector';
import PropTypes from 'prop-types';
import { 
    setCurrentGameDate, 
    getPlayers,
    clearGamePlayers } from '../../actions';

class TopBar extends Component {

    componentDidUpdate = (prevProps) => {
        
        if ( this.props.gameDate !== undefined &&
            prevProps.gameDate !== undefined) {
                
            if (prevProps.gameDate.every((v,i)=> v !== this.props.gameDate[i])) {
                const select = document.querySelector('.date-selector-container select');
                this.props.setCurrentGameDate(select.value);
                
                // Reset value in select to default after toggle game types
                select.selectedIndex = 0;
            }
        }
        
        if (this.props.currentGameDate === undefined) {
            this.props.setCurrentGameDate(this.props.gameDate[0]);
        }
    }




    
    render() {
        return (
            <div className='top-bar'>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameType: state.grids.gameTypeSelected,
        gameDate: state.grids.gameDate,
        currentGameDate: state.grids.currentSelectedGameDate,
        players: state.grids.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCurrentGameDate,
        getPlayers,
        clearGamePlayers
    }, dispatch);
};

TopBar.propTypes = {
    gameType: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);