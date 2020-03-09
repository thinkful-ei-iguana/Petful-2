import React from 'react';
import './App.css';
import landing from './landing.js';
import adopt from './adopt';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
          <h1>PAWSIBILITIES</h1>
          <Route exact path='/' component={landing} />
          <Route path='/adopt' component={adopt} />
        </header>
      </div>
    );
  }
}

export default App;
