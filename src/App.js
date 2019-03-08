import React, { Component } from 'react';
import './App.css';
import GetNews from './containers/GetNews';

const ARGNEWS = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=91a3bc0b07184b7a8bf352ff162016cd";
const USNEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=91a3bc0b07184b7a8bf352ff162016cd";
const BRNEWS = "https://newsapi.org/v2/top-headlines?country=br&apiKey=91a3bc0b07184b7a8bf352ff162016cd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.schneiderpr.com/wp-content/uploads/2015/12/SA-Newsroom-Logo.png" alt="newsroom"/>
        </header>
        <h1>LocalNews</h1>
        <GetNews api={ARGNEWS}/>
        <h1>US News</h1>
        <GetNews api={USNEWS}/>
        <h1>Brasil News</h1>
        <GetNews api={BRNEWS}/>
      </div>
    );
  }
}

export default App;
