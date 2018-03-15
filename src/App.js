import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="header">
        <img src="https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/logo.png" alt='' />
          <h1>Shelfie</h1>
        </div>

        { Routes }

      </div>
    );
  }
}

export default App;
