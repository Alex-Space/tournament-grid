import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from '../TopBar/TopBar';

class MainContentArea extends Component {
    render() {
        return (
            <div>
                <TopBar />
                Main content area 
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContentArea);