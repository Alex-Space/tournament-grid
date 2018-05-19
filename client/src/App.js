import React, { Component } from 'react';
import Sidebar from './components/Sidebar/index';
import SidebarHeader from './components/Sidebar/SidebarHeader/SidebarHeader';
import SidebarPlayers from './components/Sidebar/SidebarPlayers/SidebarPlayers';
import MainContentArea from './components/MainContentArea/MainContentArea';
import { connect } from 'react-redux';
import { gameType } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true,
      grid: '1 vs 1'
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount = () => {
    // this.props.getCurrentGrid(this.props.grid);
    // console.log(this.props);
  }

  render() {
    const sidebarContent = (
      <div>
        <SidebarHeader />
        <SidebarPlayers />
      </div>
    );
console.log(this.props);
    return (
      <div className="App">

        <Sidebar 
              sidebar={sidebarContent}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              docked={true}>
              <MainContentArea />
        </Sidebar>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentGrid: state.grid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentGrid: () => {
      dispatch( gameType() );
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
