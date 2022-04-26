import { React, useState } from 'react'
import { Button, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import './../App.css'

export default function MainPage(props) {

  // Input field
 const [inputValue, setInputValue] = useState("");

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
    document.getElementById("labelText").innerHTML = e.target.value;
  };

  const resetInputField = () => {
    setInputValue("");
    document.getElementById("labelText").innerHTML = "Space for input text";
  };

    return (    
      <div className="App">
        <header className="App-header">
          <h2>MainPage</h2>

          <label id="labelText" onClick={handleUserInput}>
            Space for input text
        </label>

        <div>
          <Input type="text" placeholder="..." value={inputValue} onChange={handleUserInput}/>
          <Button color="primary" size="sm" onClick={resetInputField}>Reset</Button>
        </div>

        </header>
      </div>
    );
  }