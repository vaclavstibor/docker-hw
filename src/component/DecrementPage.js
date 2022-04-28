import React, { Component } from 'react';
import { Button } from 'reactstrap'

import './../App.css'

export default class Decrement extends Component {

    render() {
        return (    
            <div className="App">
              <header className="App-header">
                <h2>Decrement Page</h2>
      
                <div className="Counter">
                <label id="Counter-output"> { this.props.counter } </label>
                <div className="Btn-containter">
                  <Button color="danger" className="Control-btn" onClick={ this.props.decrement }>Decrement</Button>
                </div>
              </div>
              </header>
            </div>
          )
    }
}