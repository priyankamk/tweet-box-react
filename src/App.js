import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Tweetbox from './Tweetbox'
import Bar from './Bar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tweetbox maxLength="50" />
      </div>
    );
  }
}

export default App;
