import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from '../TopBar/TopBar';
import TournamentGrid from '../../components/TournamentGrid/TournamentGrid';
import './MainContentArea.css';
import PropTypes from 'prop-types';
import { getGameDate } from '../../actions';

class MainContentArea extends Component {
    state = {
        '1 vs 1' : {
            '01.01.2018': {
                players: [
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
                    },
                    {
                        nickname: 'galadion',
                        flag: 'du',
                    },
                    {
                        nickname: 'shady',
                        flag: 'du',
                    },
                    {
                        nickname: 'EpicFail',
                        flag: 'ru',
                    },
                    {
                        nickname: 'ShurMur',
                        flag: 'ru',
                    },
                ]
            },
            '01.02.2018': {},
            '01.03.2018': {},
        },
        '2 vs 2': {
            '02.01.2018' : {
                teams: [
                    [
                        {
                            nickname: 'EpicFail',
                            flag: 'ru',
                        },
                        {
                            nickname: 'ShurMur',
                            flag: 'ru',
                        }
                    ],
                    [
                        {
                            nickname: 'Norq',
                            flag: 'ua',
                        },
                        {
                            nickname: 'MeTaN',
                            flag: 'ru',
                        }
                    ]
                ]
            }
        }
    }

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

    // componentWillMount = () => {
    //     console.log('Получить из базы дефолтные данные по игрокам и типу игры 1vs1');
    // }
    componentWillMount = () => {
        this.props.getGameDate(this.props.gameTypeSelected);
    }

    render() {
        return (
            <div className='main-content-area'>
                <TopBar gameDate={this.props.gameDate}/>
                <TournamentGrid 
                    {...this.props}
                    testState={this.state[this.props.gameTypeSelected]}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameTypeSelected: state.grids.gameTypeSelected,
        gameTypes: state.grids.gameTypes,
        gameDate: state.grids.gameDate
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getGameDate
    }, dispatch);
};

MainContentArea.propTypes = {
    gameTypeSelected: PropTypes.string.isRequired,
    gameTypes: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentArea);