import React, { Component } from 'react';
import Sidebar from './components/Sidebar/index';
import MainContentArea from './components/MainContentArea/MainContentArea';

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
