import React, { Component } from 'react';
import { Button } from 'reactstrap'

import './../App.css'

export default class Decrement extends Component {
    state = {
      counter: this.props.data.counter
    }
  
    change = () => {
      this.props.data.change(this.state.counter)
      this.setState({ counter: this.state.counter - 1 })
      document.getElementById("Counter-output").innerHTML = this.state.counter
    }

    render() {
        return (    
            <div className="App">
              <header className="App-header">
                <h2>Decrement Page</h2>
      
                <div className="Counter">
                <label id="Counter-output"> { this.state.counter } </label>
                <div className="Btn-containter">
                  <Button color="danger" className="Control-btn" onClick={ this.change }>Decrement</Button>
                </div>
              </div>
              </header>
            </div>
          );
    }
}