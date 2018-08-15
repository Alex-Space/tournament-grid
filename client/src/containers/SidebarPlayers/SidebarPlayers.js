import React, { Component } from 'react';
import './SidebarPlayers.css';
import { getPlayers } from '../../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import FlagIcon from '../../components/FlagIcon/FlagIcon';
import Spinner from '../../components/Spinner/Spinner';

class SidebarPlayers extends Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        if ( nextProps.players !== undefined && 
            nextProps.players.length > 0 &&
            nextProps.players.length === this.props.players.length && 
            nextProps.players.every((v,i)=> v === this.props.players[i])
        ) {
             return false;
        } else {
            return true;
        }
    }

    render() {

        // Loader spinner
        if (this.props.players === undefined || this.props.players.length === 0) {
            return (
                <div className="spinner-container">
                    <Spinner width={30} height={30} fill='#f7dba7' />
                </div>
            );
        } else {
            if (this.props.gameType === '1 vs 1') {
                return (
                    <div>
                        <ul className='players-list'>
                            {this.props.players ? this.props.players.map(el => {
                                return (
                                    <li key={el._id}>
                                        <FlagIcon code={el.flag} />
                                        <span className='player-nickname'>{el.nickname}</span>
                                    </li>
                                );
                            }) : null}
                        </ul>
                    </div>
                    
                );
            } else if ( this.props.gameType === '2 vs 2' ||
                        this.props.gameType === '3 vs 3' ||
                        this.props.gameType === '4 vs 4' ||
                        this.props.gameType === '5 vs 5' ) {
                return (
                    <ul className='players-list teams-list'>
                        {this.props.players && this.props.players.length !== 0 ? this.props.players.map((el, index) => {
                            const team = el.map((team, key) => {
                                    return (
                                        <div key={key}>
                                            <FlagIcon code={team.flag} />
                                            <span className='player-nickname'>{team.nickname}</span>
                                        </div>
                                    );
                                });
                                return <li key={index}>{team}</li>;
                            }) : null}
                    </ul>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        gameType: state.grids.gameTypeSelected,
        gameDate: state.grids.currentSelectedGameDate,
        players: state.grids.players
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPlayers,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarPlayers);