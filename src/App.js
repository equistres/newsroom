import React, { Component } from 'react';
import './App.css';
import GetNews from './containers/GetNews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          NEWSROOM
        </header>
        <GetNews />
      </div>
    );
  }
}

export default App;
