import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from '../TopBar/TopBar';
import TournamentGrid from '../../components/TournamentGrid/TournamentGrid';
import './MainContentArea.css';
import PropTypes from 'prop-types';
import { getGameDate } from '../../actions';
import DateSelector from '../../components/DateSelector/DateSelector';

class MainContentArea extends Component {

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
                return 'Дефолт типа...';
        }
    }

    componentWillMount = () => {
        this.props.getGameDate(this.props.gameTypeSelected);
    };

    setCurrentGameData = (e) => {
        this.props.setCurrentGameDate(e.target.value);
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
                return 'Top Bar'
        }
    }

    render() {
        return (
            <div className='main-content-area'>
                <TopBar gameDate={this.props.gameDate}>
                    <h2>{this.getCurrendGrid()}</h2>
                    <DateSelector
                        gameDate={this.props.gameDate}
                        onChange={this.setCurrentGameData}
                    />
                </TopBar>
                <TournamentGrid {...this.props} />
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