import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import MainPage from './component/MainPage';
import IncrementPage from './component/IncrementPage';
import DecrementPage from './component/DecrementPage';
import './App.css';

export default class App extends Component {
  
  state = { counter: 0 }

  change(value) { this.setState({ counter: value }) }

  render(){
    return (
      <Router>
        <div className="App">
          <header className='App-header'>
            <div className="App-nav-bar">
              <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/IncrementPage">Increment</Link>
              </li>
              <li>
                <Link to="/DecrementPage">Decrement</Link>
              </li>
              </ul>
            <Routes>
                <Route exact path='/' element={< MainPage />}></Route>
                <Route exact path='/IncrementPage' element={< IncrementPage data={ { counter: this.state.counter, change: this.change.bind(this) } }/>}></Route>
                <Route exact path='/DecrementPage' element={< DecrementPage data={ { counter: this.state.counter, change: this.change.bind(this) } }/>}></Route>
            </Routes>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}