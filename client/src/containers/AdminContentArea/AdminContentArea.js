import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from '../TopBar/TopBar';
import './AdminContentArea.css';

class AdminContentArea extends Component {

    render() {
        return (
            <div className='admin-content-area'>
                <TopBar>
                    <h2>Админка</h2>
                </TopBar>
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
        //
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentArea);