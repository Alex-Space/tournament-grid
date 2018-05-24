import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from '../TopBar/TopBar';
import TournamentGrid from '../../components/TournamentGrid/TournamentGrid';
import './MainContentArea.css';
import PropTypes from 'prop-types';

class MainContentArea extends Component {
    testPlayers = [
        {
            nickname: 'Nixaristix',
            flag: 'ru',
        },
        {
            nickname: 'Norq',
            flag: 'ua',
        },
        {
            nickname: 'MeTaN',
            flag: 'ru',
        },
        {
            nickname: 'gemeinheit',
            flag: 'du',
        }
    ];

    getCurrendGrid = () => {
        switch (this.props.gameTypeSelected) {
            case '1 vs 1':
                return "Один против одного";
            case '2 vs 2':
                return "Двое против двух";
            case '3 vs 3':
                return "Трое против трех";
            case '5 vs 5':
                return "Пять против пяти";
            default:
                return 'Дефолт типа...'
        }
    }

    componentWillMount = () => {
        console.log('Получить из базы дефолтные данные по игрокам и типу игры 1vs1');
    }

    render() {
        return (
            <div className='main-content-area'>
                <TopBar />
                <TournamentGrid players={this.testPlayers} {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameTypeSelected: state.grids.gameTypeSelected,
        gameTypes: state.grids.gameTypes
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

MainContentArea.propTypes = {
    gameTypeSelected: PropTypes.string.isRequired,
    gameTypes: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentArea);