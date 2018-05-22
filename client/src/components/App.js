import React, { Component } from 'react';
import Sidebar from '../containers/Sidebar';
import MainContentArea from '../containers/MainContentArea/MainContentArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar>
            <MainContentArea />
        </Sidebar>
      </div>
    );
  }
}

export default App;
