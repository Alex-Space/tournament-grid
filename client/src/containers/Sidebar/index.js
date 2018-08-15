import React, { Component } from 'react';
import Sidebar from './sidebar';

class ModifiedSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: true
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (
            <Sidebar 
              sidebar={this.props.sidebarContent}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              docked={true}>
              {this.props.children}
            </Sidebar>
        )
    }
};

export default ModifiedSidebar;
