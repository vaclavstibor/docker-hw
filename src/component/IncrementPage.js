import React, { Component } from 'react';
import { Button } from 'reactstrap'

import './../App.css'

export default class IncrementPage extends Component {

  render() {
    return (    
      <div className="App">
        <header className="App-header">
          <h2>Increment Page</h2>
  
          <div className="Counter">
            <label id="Counter-output"> { this.props.counter } </label>
            <div className="Btn-containter">
              <Button color="success" className="Control-btn" onClick={ this.props.increment }>Increment</Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
