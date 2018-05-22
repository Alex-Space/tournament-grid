import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './TopBar.css';

class TopBar extends Component {

    getCurrendGrid = () => {
        switch (this.props.grids.gameTypeSelected) {
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
            <div className='top-bar'>
                <h2>{this.getCurrendGrid()}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);