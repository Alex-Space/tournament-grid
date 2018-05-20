import React, { Component } from 'react';
import Sidebar from './sidebar';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarPlayers from './SidebarPlayers/SidebarPlayers';

class modifiedSidebar extends Component {
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
        const sidebarContent = (
            <div>
              <SidebarHeader />
              <SidebarPlayers />
            </div>
        );
        return (
            <Sidebar 
              sidebar={sidebarContent}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              docked={true}>
              {this.props.children}
            </Sidebar>
        )
    }
};


export default modifiedSidebar;
