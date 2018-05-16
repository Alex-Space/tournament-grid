import React, { Component } from 'react';
import Sidebar from './components/Sidebar/index';
import SidebarHeader from './components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarPlayers from './components/Sidebar/SidebarPlayers/SidebarPlayers';

class App extends Component {
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
      <div className="App">

        <Sidebar 
              sidebar={sidebarContent}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              docked={true}>
          <b>Main content</b>
        </Sidebar>

      </div>
    );
  }
}

export default App;
